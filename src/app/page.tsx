"use client"
import CarCard from "@/components/comparisionsection/CarCard";
import IconInfo from "@/components/comparisionsection/IconInfo";
import { Button } from "@/components/ui/button";
import { brandAndVariantGroups } from "@/data/carData";
import { CompareCar, SelectedCar } from "@/type/car";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";



export default function Home() {

  const [cars, setCars] = useState<CompareCar[]>([
    {
      id: crypto.randomUUID(),
      title: "Car 1",
      selectedCar: null,
    },
    {
      id: crypto.randomUUID(),
      title: "Car 2",
      selectedCar: null,
    },
  ]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  const handleCarSelect = (
    carId: string,
    selectedCar: SelectedCar | null
  ) => {
    if (!selectedCar) {
      setCars((prevCars) =>
        prevCars.map((car) =>
          car.id === carId
            ? {
              ...car,
              selectedCar: null,
            }
            : car
        )
      );

      return;
    }

    const brandGroup = brandAndVariantGroups.find(
      (brand) => brand.brand === selectedCar.brand
    );

    const model = brandGroup?.models.find(
      (model) => model.name === selectedCar.model
    );

    const variant = model?.variants.find(
      (variant) => variant.name === selectedCar.variant
    );

    const completeSelectedCar = {
      ...selectedCar,
      price: variant?.price,
      engineDisplacement: variant?.engineDisplacement,
      maxPower: variant?.maxPower,
      mileage: variant?.mileage,
      transmission: variant?.transmission,
    };

    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === carId
          ? {
            ...car,
            selectedCar: completeSelectedCar,
          }
          : car
      )
    );
  };

  const getFilteredOptions = (currentCarId: string) => {
    return brandAndVariantGroups
      .map((brandGroup) => ({
        ...brandGroup,

        models: brandGroup.models
          .map((model) => ({
            ...model,

            variants: model.variants.filter((variant) => {
              const alreadySelected = cars.some(
                (car) =>
                  car.id !== currentCarId &&
                  car.selectedCar?.brand === brandGroup.brand &&
                  car.selectedCar?.model === model.name &&
                  car.selectedCar?.variant === variant.name
              );

              return !alreadySelected;
            }),
          }))
          .filter((model) => model.variants.length > 0),
      }))
      .filter((brandGroup) => brandGroup.models.length > 0);
  };

  useEffect(() => {
    const updateHeight = () => {
      const heights = cardRefs.current.map(
        (card) => card?.getBoundingClientRect().height ?? 0
      );

      const maxHeight = Math.max(...heights);

      if (maxHeight > 0) {
        setCardHeight(maxHeight);
      }
    };

    updateHeight();

    const observers = cardRefs.current
      .filter(Boolean)
      .map((card) => {
        const observer = new ResizeObserver(updateHeight);
        observer.observe(card!);
        return observer;
      });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const getCompareQuery = () => {
    const selectedCars = cars
      .map((car) => car.selectedCar)
      .filter((car): car is SelectedCar => car !== null);

    return encodeURIComponent(JSON.stringify(selectedCars));
  };

  

  return (
    <>
      <div className="mt-20">
        <div className="bg-light-blue/50">
          <div className="container mx-auto px-4 md:px-6 xl:px-37.5">
            <div className="py-12 lg:py-14 ">
              {/* Heading */}
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Compare <span className="text-dark-blue">SUV Cars</span>
                </p>

                <p className="mt-3 font-open-sans text-base md:text-lg font-semibold text-[#4C4C4C]">
                  Select two cars to compare features, pricing and loan options side
                  by side
                </p>
              </div>

              {/* Content */}
              <div className="relative mt-12 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 md:gap-10">
                <div className="relative col-span-2 flex flex-col gap-9 md:flex-row">
                  {cars.slice(0, 2).map((car, index) => (
                    <CarCard
                      key={car.id}
                      title={car.title}
                      selectedCar={car.selectedCar}
                      firstSelectOptions={getFilteredOptions(car.id)}
                      cardClassName="flex-1 item-stretch"
                      onCarSelect={(selectedCar) =>
                        handleCarSelect(car.id, selectedCar)
                      }
                      cars={cars}
                      cardRef={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      cardHeight={cardHeight}
                    />
                  ))}

                  {/* VS */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full  bg-dark-blue text-2xl font-bold text-white"
                  >
                    VS
                  </div>
                </div>


                {/* Right Section */}

                <div className="flex flex-col  gap-8 col-span-1 md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col md:flex-row lg:flex-col gap-8 justify-between ">
                    <IconInfo
                      image="ratingblue.png"
                      imageName="rating"
                      info="Compare features side by side"
                    />

                    <IconInfo
                      image="pricingblue.png"
                      imageName="pricing"
                      info="Check pricing & offers"
                    />

                    <IconInfo
                      image="shieldblue.png"
                      imageName="shield"
                      info="Choose the best for you"
                    />
                  </div>

                  <Link href={`/compare-car?cars=${getCompareQuery()}`}>
                    <Button
                      className="w-full md:w-auto bg-dark-blue hover:bg-dark-blue/80 cursor-pointer px-8"
                      size="md"
                    >
                      <p className="text-lg sm:text-xl font-bold font-open-sans">
                        Start Comparing
                      </p>
                      <ChevronRight color="white" width={20} height={20} />
                    </Button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
