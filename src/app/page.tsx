"use client"
import CarCard from "@/components/comparisionsection/CarCard";
import IconInfo from "@/components/comparisionsection/IconInfo";
import RouteLink from "@/components/comparisionsection/RouteLink";
import { Button } from "@/components/ui/button";
import { brandAndVariantGroups } from "@/data/carData";
import { CompareCar, SelectedCar } from "@/type/car";
import { ChevronRight } from "lucide-react";
import { useState } from "react";



export default function Home() {


  const MAX_CARS = 4;

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

  const handleCarSelect = (
    carId: string,
    selectedCar: SelectedCar | null
  ) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === carId
          ? {
            ...car,
            selectedCar,
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

  const addCar = () => {
    if (cars.length >= MAX_CARS) {
      return;
    }

    setCars((prevCars) => [
      ...prevCars,
      {
        id: crypto.randomUUID(),
        title: `Car ${prevCars.length + 1}`,
        selectedCar: null,
      },
    ]);
  };

  const removeCar = (carId: string) => {
    setCars((prev) =>
      prev.filter((car) => car.id !== carId)
    );
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
              <div className="relative mt-12 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 md:gap-10  ">
                <div className="relative col-span-2 flex flex-col gap-9 md:flex-row">
                  {cars.slice(0, 2).map((car) => (
                    <CarCard
                      key={car.id}
                      title={car.title}
                      selectedCar={car.selectedCar}
                      firstSelectOptions={getFilteredOptions(car.id)}
                      cardClassName="flex-1"
                      onCarSelect={(selectedCar) =>
                        handleCarSelect(car.id, selectedCar)
                      }
                    />
                  ))}

                  <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark-blue text-2xl font-bold text-white">
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

                  <Button
                    className="w-full sm:w-auto bg-dark-blue hover:bg-dark-blue/80 cursor-pointer"
                    size="md"
                  >
                    <p className="text-lg sm:text-xl font-bold font-open-sans">
                      Start Comparing
                    </p>

                    <ChevronRight color="white" width={20} height={20} />
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20">
        <div className="container md:px-6 xl:px-37.5">
          <div className="mb-2.5 flex gap-2.5 ">
            <RouteLink image="home.svg" iamgeAlt="home" />
            <RouteLink routeName="Cars Loan" variant="parentRoute" />
            <RouteLink routeName="Compare cars" variant="childRoute" />

          </div>
          <p className="text-3xl font-open-sans font-bold ">Compare Cars</p>
          <p className=" font-open-sans mt-4 text-custom-grey">Not sure which HDFC product suits your needs? Use HDFC's comparison tool to evaluate multiple options across features, benefits, interest rates, eligibility, fees, and more helping you choose the right financial solution with confidence.</p>

          <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4">
            {cars.map((car, index) => (
              <CarCard
                key={car.id}
                title={car.title}
                selectedCar={car.selectedCar}
                firstSelectOptions={getFilteredOptions(car.id)}
                onCarSelect={(selectedCar) =>
                  handleCarSelect(car.id, selectedCar)
                }
                showRemoveCarButton={index >= 2}
                removeCarFunction={() => removeCar(car.id)}
              />
            ))}

            {cars.length < MAX_CARS && (
              <button
                onClick={addCar}
                className="flex cursor-pointer flex-col items-center justify-center rounded-[15px] border-2 border-dashed border-dark-blue p-4 transition hover:bg-blue-50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-dark-blue text-3xl text-white">
                  +
                </div>

                <p className="mt-4 text-lg font-semibold text-dark-blue">
                  Add Car
                </p>
              </button>
            )}
          </div>

          <Button
            className="block mx-auto mt-5 sm:w-auto bg-dark-blue hover:bg-dark-blue/80 px-6 xl:px-12 h-15 w-1/2 cursor-pointer"
            size="md"
          >
            <p className="text-sm xl:text-xl font-semibold">
              Compare Now
            </p>
          </Button>
        </div>


      </div>



    </>
  );
}
