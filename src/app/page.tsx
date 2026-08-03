"use client"
import CarCard from "@/components/comparisionsection/CarCard";
import IconInfo from "@/components/comparisionsection/IconInfo";
import RouteLink from "@/components/comparisionsection/RouteLink";
import { Button } from "@/components/ui/button";
import { brandModelOptions, variantOptions, cars } from "@/data/carData";
import { ChevronRight } from "lucide-react";
import { useState } from "react";



export default function Home() {
  const MAX_CARS = 4;
  const MIN_CARS = 2;

  const [visibleCars, setVisibleCars] = useState(2);

  const addCar = () => {
    if (visibleCars < MAX_CARS) {
      setVisibleCars((prev) => prev + 1);
    }
  };

  const removeCar = () => {
    if (visibleCars > MIN_CARS) {
      setVisibleCars((prev) => prev - 1);
    }
  }

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
                {/* Car 1 */}

                <div className="relative col-span-2 flex flex-col md:flex-row gap-9">
                  <CarCard
                    title="Car 1"
                    firstSelectOptions={brandModelOptions}
                    secondSelectOptions={variantOptions}
                    cardClassName="flex-1  "
                  />

                  <CarCard
                    title="Car 2"
                    firstSelectOptions={brandModelOptions}
                    secondSelectOptions={variantOptions}
                    cardClassName="flex-1  "
                  />
                  <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  h-20 w-20 rounded-full bg-dark-blue items-center justify-center text-white font-bold text-2xl">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 md:gap-x-5 mt-5">
            {cars.slice(0, visibleCars).map((car, index) => (
              <CarCard
                key={index}
                title={car.title}
                firstSelectOptions={brandModelOptions}
                secondSelectOptions={variantOptions}
                showRemoveCarButton={index === 2 || index === 3}
                removeCarFunction={removeCar}
              />
            ))}

            {visibleCars < MAX_CARS && (
              <button
                onClick={addCar}
                className=" rounded-[15px] border-2 border-dashed border-dark-blue flex flex-col items-center justify-center hover:bg-blue-50 transition cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-dark-blue text-white flex items-center justify-center text-3xl">
                  +
                </div>

                <p className="mt-4 font-semibold text-dark-blue text-lg">
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
