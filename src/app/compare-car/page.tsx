"use client"
import RouteLink from "@/components/comparisionsection/RouteLink";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { routeLinks } from "@/data/carData";
import { CompareCar, SelectedCar } from "@/type/car";
import CompareCard from "@/section/CompareCard";
import CompareCardInfo from "@/section/CompareCardInfo";

const page = () => {
    const createEmptyCar = (index: number): CompareCar => ({
        id: crypto.randomUUID(),
        title: `Car ${index + 1}`,
        selectedCar: null,
    });

    const [cars, setCars] = useState<CompareCar[]>([
        createEmptyCar(0),
        createEmptyCar(1),
    ]);

    const comparisonRef = useRef<HTMLDivElement | null>(null);
    const selectedCars = cars.filter((car) => car.selectedCar);

    const isComparisonReady =
        cars.filter(
            (car) =>
                car.selectedCar?.brand &&
                car.selectedCar?.model &&
                car.selectedCar?.variant
        ).length === cars.length;

    const searchParams = useSearchParams();

    const [showComparison, setShowComparison] = useState(false);

    useEffect(() => {
        const carsQuery = searchParams.get("cars");

        if (!carsQuery) {
            setCars([createEmptyCar(0), createEmptyCar(1)]);
            return;
        }

        try {
            const selectedCars: SelectedCar[] = JSON.parse(carsQuery);

            const newCars: CompareCar[] = selectedCars.map(
                (selectedCar, index) => ({
                    id: crypto.randomUUID(),
                    title: `Car ${index + 1}`,
                    selectedCar,
                })
            );

            while (newCars.length < 2) {
                newCars.push(createEmptyCar(newCars.length));
            }

            setCars(newCars);
        } catch (error) {
            console.error("Invalid cars query:", error);
            setCars([createEmptyCar(0), createEmptyCar(1)]);
        }
    }, [searchParams]);
    useEffect(() => {
        if (isComparisonReady && showComparison) {
            comparisonRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [isComparisonReady, showComparison]);

    const comparisonSpecs = [
        {
            label: "Brand",
            key: "brand",
        },
        {
            label: "Variant",
            key: "variant",
        },
        {
            label: "Price",
            key: "price",
        },
        {
            label: "Engine Displacement",
            key: "engineDisplacement",
        },
        {
            label: "Max Power",
            key: "maxPower",
        },
        {
            label: "Mileage",
            key: "mileage",
        },
        {
            label: "Transmission",
            key: "transmission",
        },
    ];

    return (
        <div>
            <div className="my-20">
                <div className="container md:px-6 xl:px-37">
                    <div className="mb-3 flex gap-2.5">
                        {
                            routeLinks.map((route, index) => (
                                <RouteLink key={index} image={route.image} imageAlt={route.imageAlt} variant={route.variant} routeName={route.routeName} />
                            ))
                        }
                    </div>
                    <p className="text-3xl font-open-sans font-bold">Compare Cars</p>
                    <p className="font-open-sans mt-4 text-[#6B7280]">Not sure which HDFC product suits your needs? Use HDFC's comparison tool to evaluate multiple options across features, benefits,interest rates, eligibility, fees, and more helping you choose the right financial solution with confidence.</p>

                    <CompareCard
                        cars={cars}
                        setCars={setCars}
                        setShowComparison={setShowComparison}
                    />

                    <Button
                        className={`block mx-auto mt-5 sm:w-auto bg-[#004C8F] hover:bg-[#004C8F/80] px-4 xl:px-12 h-15 ${!isComparisonReady
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                            }`}
                        disabled={!isComparisonReady}
                        onClick={() => setShowComparison((prev) => !prev)}
                    >
                        <p className="text-base xl:text-xl font-semibold">
                            {isComparisonReady && showComparison ? "Hide Comparison" : "Start Comparison"}
                        </p>
                    </Button>
                </div>

            </div>
            {isComparisonReady && showComparison && (
                <div ref={comparisonRef} className="container md:px-6 xl:px-37 pb-20">

                    <p>
                        {selectedCars.map((car, index) => (
                            <span key={car.id} className="font-sans font-bold text-[#474747] text-2xl mb-5">
                                {index > 0 && <span className="px-3">VS</span>}
                                {car.selectedCar?.model} - {car.selectedCar?.variant}
                            </span>
                        ))}
                    </p>

                    <p className="text-[#6B7280] mt-5 mb-10">
                        Should you buy{" "}

                        {selectedCars.map((car, index) => (
                            <React.Fragment key={car.id}>
                                the{" "}
                                <strong>{car.selectedCar?.model}</strong>
                                {index < selectedCars.length - 2
                                    ? ", "
                                    : index === selectedCars.length - 2
                                        ? " or "
                                        : "?"}
                            </React.Fragment>
                        ))}{" "}

                        Find out which car is the better choice by comparing the models based on
                        Price, Size, Space, Boot Space, Service Cost, Mileage, Features, Colours,
                        and other specifications.{" "}

                        {selectedCars.map((car, index) => (
                            <React.Fragment key={`price-${car.id}`}>
                                The{" "}
                                <strong>{car.selectedCar?.model}</strong>{" "}
                                starts at Rs. {car.selectedCar?.price} (ex-showroom) for the{" "}
                                {car.selectedCar?.variant} variant
                                {index < selectedCars.length - 1 ? ", " : "."}{" "}
                            </React.Fragment>
                        ))}

                        The specs of{" "}

                        {selectedCars.map((car, index) => (
                            <React.Fragment key={`engine-${car.id}`}>
                                <strong>{car.selectedCar?.model}</strong>{" "}
                                is powered by a{" "}
                                {car.selectedCar?.engineDisplacement} Petrol engine
                                {index < selectedCars.length - 1 ? ", " : "."}{" "}
                            </React.Fragment>
                        ))}

                        In terms of mileage,{" "}

                        {selectedCars.map((car, index) => (
                            <React.Fragment key={`mileage-${car.id}`}>
                                the{" "}
                                <strong>{car.selectedCar?.model}</strong>{" "}
                                delivers {car.selectedCar?.mileage} (Petrol top model)
                                {index < selectedCars.length - 1 ? ", while " : "."}{" "}
                            </React.Fragment>
                        ))}
                    </p>


                    <div className="overflow-x-auto border border-gray-200 rounded-md mb-3">
                        <table className="w-full min-w-175 border-collapse text-center">
                            <thead >
                                <tr className="bg-[#0088FF]/15">
                                    <th className="bg-[#d9edff] sticky left-0 z-20 min-w-55  border-gray-200  px-5 py-4 font-semibold text-left">
                                        Key Highlights
                                    </th>

                                    {selectedCars.map((car) => (
                                        <th
                                            key={car.id}
                                            className="min-w-55 px-5 py-4 text-center"
                                        >
                                            <div className="mt-1 text-sm font-medium ">
                                                <p> {car.selectedCar?.model}</p>
                                                <p> {car.selectedCar?.variant}</p>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {comparisonSpecs.map((spec) => (
                                    <tr
                                        key={spec.key}
                                        className=" border-[#B6B6B6] border-b last:border-b-0"
                                    >
                                        <td className="sticky left-0 z-10 border-b border-r border-gray-200 bg-white px-5 py-4 font-semibold text-gray-700 text-left">
                                            {spec.label}
                                        </td>

                                        {cars
                                            .filter((car) => car.selectedCar)
                                            .map((car) => (
                                                <td
                                                    key={car.id}
                                                    className="px-5 py-4 text-gray-600 border border-r"
                                                >
                                                    {car.selectedCar?.[
                                                        spec.key as keyof SelectedCar
                                                    ] || "-"}
                                                </td>
                                            ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <CompareCardInfo
                        selectedCars={selectedCars}
                        comparisonSpecs={comparisonSpecs}

                    />
                </div>
            )}
        </div>
    )
}

export default page