import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

import { CompareCar } from "@/type/car";

type ComparisonSpec = {
    label: string;
    key: string;
};

type CompareCardInfoProps = {
    selectedCars: CompareCar[];
    comparisonSpecs: ComparisonSpec[];
};


const CompareCardInfo = ({
    selectedCars,
    comparisonSpecs,
}: CompareCardInfoProps) => {
    const accordionData = [
        {
            accordionKey: "basic-information",
            accordionHeader: "Basic Information",
            accordionBody: (selectedCars: CompareCar[]) => (
                <div className="overflow-x-auto rounded-md">
                    <table className="w-full min-w-175 border-collapse text-center">
                        <thead >
                            <tr className="bg-[#0088FF]/15">
                                <th className="bg-[#d9edff]  sticky left-0 z-10 min-w-55 border-l border-gray-200 px-5 py-4 font-semibold text-left">
                                    Key Highlight
                                </th>

                                {selectedCars.map((car) => (
                                    <th
                                        key={car.id}
                                        className=" min-w-55  px-5 py-4 text-center"
                                    >
                                        <div className="mt-1 text-sm font-medium">
                                            <p> {car.selectedCar?.model}</p>
                                            <p> {car.selectedCar?.variant}</p>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody >
                            {comparisonSpecs.map((spec) => (
                                <tr
                                    key={spec.key}
                                    className="border-b border-[#B6B6B6] last:border-b-0"
                                >
                                    <td className="sticky left-0 z-10 border-b border-r border-gray-200 bg-white px-5 py-4 text-left font-semibold text-gray-700">
                                        {spec.label}
                                    </td>

                                    {selectedCars.map((car) => (
                                        <td
                                            key={car.id}
                                            className="border border-gray-200 px-5 py-4 text-gray-600"
                                        >
                                            {car.selectedCar?.[
                                                spec.key as keyof typeof car.selectedCar
                                            ] || "-"}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ),

        },
        {
            accordionKey: "engine-transmission",
            accordionHeader: "Engine & Transmission",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " or "
                                    : ""}
                        </React.Fragment>
                    ))}
                    ?

                    <br />

                    Find out which car is the better choice by comparing the{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " and "
                                    : ""}
                        </React.Fragment>
                    ))}{" "}
                    based on engine and transmission.

                    <br />

                    {selectedCars.map((car) => (
                        <React.Fragment key={car.id}>
                            The{" "}
                            <strong>{car.selectedCar?.model}</strong>{" "}
                            engine is  {car.selectedCar?.engineDisplacement} (ex-showroom) for the{" "}
                            {car.selectedCar?.variant} variant.{" "}
                        </React.Fragment>
                    ))}
                </p>
            )
        },
        {
            accordionKey: "fuel-performance",
            accordionHeader: "Fuel & Performance",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " or "
                                    : ""}
                        </React.Fragment>
                    ))}
                    ?

                    <br />

                    Find out which car is the better choice by comparing the{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " and "
                                    : ""}
                        </React.Fragment>
                    ))}{" "}
                    based on Fuel and performance.

                    <br />

                    {selectedCars.map((car) => (
                        <React.Fragment key={car.id}>
                            The{" "}
                            <strong>{car.selectedCar?.model}</strong>{" "}
                            starts at Rs. {car.selectedCar?.mileage} (ex-showroom) for the{" "}
                            {car.selectedCar?.variant} variant.{" "}
                        </React.Fragment>
                    ))}
                </p>
            ),
        },
        {
            accordionKey: "suspension-steering-brakes",
            accordionHeader: "Suspension, Steering & Brakes",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " or "
                                    : ""}
                        </React.Fragment>
                    ))}
                    ?

                    <br />

                    Find out which car is the better choice by comparing the{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " and "
                                    : ""}
                        </React.Fragment>
                    ))}{" "}
                    based on Suspension, Steering & Brakes.

                    <br />

                    {selectedCars.map((car) => (
                        <React.Fragment key={car.id}>
                            The{" "}
                            <strong>{car.selectedCar?.model}</strong>{" "}
                            have the Suspension, Steering & Brakes as {car.selectedCar?.suspensionSteeringBrakes}  for the{" "}
                            {car.selectedCar?.variant} variant.{" "}
                        </React.Fragment>
                    ))}
                </p>
            ),
        },
        {
            accordionKey: "dimensions-capacity",
            accordionHeader: "Dimensions & Capacity",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " or "
                                    : ""}
                        </React.Fragment>
                    ))}
                    ?

                    <br />

                    Find out which car is the better choice by comparing the{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " and "
                                    : ""}
                        </React.Fragment>
                    ))}{" "}
                    based on Dimensions & Capacity.

                    <br />

                    {selectedCars.map((car) => (
                        <React.Fragment key={car.id}>
                            The{" "}
                            <strong>{car.selectedCar?.model}</strong>{" "}
                            Dimensions & Capacity {car.selectedCar?.dimensionsCapacity}  for the{" "}
                            {car.selectedCar?.variant} variant.{" "}
                        </React.Fragment>
                    ))}
                </p>
            ),
        },
        {
            accordionKey: "comfort-convenience",
            accordionHeader: "Comfort & Convenience",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " or "
                                    : ""}
                        </React.Fragment>
                    ))}
                    ?

                    <br />

                    Find out which car is the better choice by comparing the{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " and "
                                    : ""}
                        </React.Fragment>
                    ))}{" "}
                    based on Comfort & Convenience.

                    <br />

                    {selectedCars.map((car) => (
                        <React.Fragment key={car.id}>
                            The{" "}
                            <strong>{car.selectedCar?.model}</strong>{" "} has Comfort & Convenience like
                            {car.selectedCar?.comfortConvenience} (ex-showroom) for the{" "}
                            {car.selectedCar?.variant} variant.{" "}
                        </React.Fragment>
                    ))}
                </p>
            ),

        },
        {
            accordionKey: "interior",
            accordionHeader: "Interior",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " or "
                                    : ""}
                        </React.Fragment>
                    ))}
                    ?

                    <br />

                    Find out which car is the better choice by comparing the{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " and "
                                    : ""}
                        </React.Fragment>
                    ))}{" "}
                    based on Interior.

                    <br />

                    {selectedCars.map((car) => (
                        <React.Fragment key={car.id}>
                            The{" "}
                            <strong>{car.selectedCar?.model}</strong>{" "}
                            Interior like  {car.selectedCar?.interior}  for the{" "}
                            {car.selectedCar?.variant} variant.{" "}
                        </React.Fragment>
                    ))}
                </p>
            ),
        },
        {
            accordionKey: "exterior",
            accordionHeader: "Exterior",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " or "
                                    : ""}
                        </React.Fragment>
                    ))}
                    ?

                    <br />

                    Find out which car is the better choice by comparing the{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " and "
                                    : ""}
                        </React.Fragment>
                    ))}{" "}
                    based on Exterior.

                    <br />

                    {selectedCars.map((car) => (
                        <React.Fragment key={car.id}>
                            The{" "}
                            <strong>{car.selectedCar?.model}</strong>{" "}
                            has Exterior like {car.selectedCar?.exterior}  for the{" "}
                            {car.selectedCar?.variant} variant.{" "}
                        </React.Fragment>
                    ))}
                </p>
            ),
        },
        {
            accordionKey: "adas",
            accordionHeader: "ADAS",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " or "
                                    : ""}
                        </React.Fragment>
                    ))}
                    ?

                    <br />

                    Find out which car is the better choice by comparing the{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " and "
                                    : ""}
                        </React.Fragment>
                    ))}{" "}
                    based on ADAS.

                    <br />

                    {selectedCars.map((car) => (
                        <React.Fragment key={car.id}>
                            The{" "}
                            <strong>{car.selectedCar?.model}</strong>{" "}
                            has adas {car.selectedCar?.adas} (ex-showroom) for the{" "}
                            {car.selectedCar?.variant} variant.{" "}
                        </React.Fragment>
                    ))}
                </p>
            ),
        },
        {
            accordionKey: "advanced-features",
            accordionHeader: "Advanced Features",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " or "
                                    : ""}
                        </React.Fragment>
                    ))}
                    ?

                    <br />

                    Find out which car is the better choice by comparing the{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " and "
                                    : ""}
                        </React.Fragment>
                    ))}{" "}
                    based on Advanced Features.

                    <br />

                    {selectedCars.map((car) => (
                        <React.Fragment key={car.id}>
                            The{" "}
                            <strong>{car.selectedCar?.model}</strong>{" "}
                            have Advanced Features like {car.selectedCar?.advancedFeatures} (ex-showroom) for the{" "}
                            {car.selectedCar?.variant} variant.{" "}
                        </React.Fragment>
                    ))}
                </p>
            ),
        },
        {
            accordionKey: "entertainment-communication",
            accordionHeader: "Entertainment & Communication",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " or "
                                    : ""}
                        </React.Fragment>
                    ))}
                    ?

                    <br />

                    Find out which car is the better choice by comparing the{" "}
                    {selectedCars.map((car, index) => (
                        <React.Fragment key={car.id}>
                            <strong>{car.selectedCar?.model}</strong> {" - "}
                            <strong>{car.selectedCar?.variant}</strong>
                            {index < selectedCars.length - 2
                                ? ", "
                                : index === selectedCars.length - 2
                                    ? " and "
                                    : ""}
                        </React.Fragment>
                    ))}{" "}
                    based on Entertainment & Communication.

                    <br />

                    {selectedCars.map((car) => (
                        <React.Fragment key={car.id}>
                            The{" "}
                            <strong>{car.selectedCar?.model}</strong>{" "}
                            has Entertainment & Communication features like {car.selectedCar?.entertainmentCommunication}  for the{" "}
                            {car.selectedCar?.variant} variant.{" "}
                        </React.Fragment>
                    ))}
                </p>
            ),
        },
    ]

    return (
        <Accordion
            type="single"
            collapsible
            className="w-full cursor-pointer"
        >
            {
                accordionData.map((accordion) => (
                    <AccordionItem
                        key={accordion.accordionKey}
                        value={accordion.accordionKey}
                        className="cursor-pointer border my-3 px-4 rounded-[10px]"
                    >
                        <AccordionTrigger className="font-semibold text-[#474747]">
                            {accordion.accordionHeader}
                        </AccordionTrigger>

                        <AccordionContent>
                            {accordion.accordionBody(selectedCars)}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }

        </Accordion>
    );
};

export default CompareCardInfo;