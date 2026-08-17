import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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
                <div className="overflow-x-auto">
                    <table className="w-full min-w-175 border-collapse text-center">
                        <thead>
                            <tr className="bg-[#0088FF]/15">
                                <th className="sticky z-10 min-w-55 border-gray-200 px-5 py-4 font-semibold text-left">
                                    Key Highlights
                                </th>

                                {selectedCars.map((car) => (
                                    <th
                                        key={car.id}
                                        className="min-w-55 px-5 py-4 text-center"
                                    >
                                        <div className="mt-1 text-sm font-medium">
                                            {car.selectedCar?.model}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {comparisonSpecs.map((spec) => (
                                <tr
                                    key={spec.key}
                                    className="border-[#B6B6B6] border-b last:border-b-0"
                                >
                                    <td className="sticky left-0 z-10 border-b border-r border-gray-200 bg-white px-5 py-4 font-semibold text-gray-700 text-left">
                                        {spec.label}
                                    </td>

                                    {selectedCars.map((car) => (
                                        <td
                                            key={car.id}
                                            className="px-5 py-4 text-gray-600 border border-r"
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
                    Should you buy the{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    or the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>?

                    Find out which car is the better choice by comparing the two
                    models based on Price, Size, Space, Boot Space, Service Cost,
                    Mileage, Features, Colours, and other specifications.

                    The{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    starts at Rs. {selectedCars[0]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[0]?.selectedCar?.variant} variant, while the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>{" "}
                    starts at {selectedCars[1]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[1]?.selectedCar?.variant} variant.
                </p>
            ),
        },
        {
            accordionKey: "fuel-performance",
            accordionHeader: " Fuel & Performance",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy the{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    or the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>?

                    Find out which car is the better choice by comparing the two
                    models based on Price, Size, Space, Boot Space, Service Cost,
                    Mileage, Features, Colours, and other specifications.

                    The{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    starts at Rs. {selectedCars[0]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[0]?.selectedCar?.variant} variant, while the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>{" "}
                    starts at {selectedCars[1]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[1]?.selectedCar?.variant} variant.
                </p>
            ),
        },
        {
            accordionKey: "suspension-steering-brakes",
            accordionHeader: "Suspension, Steering & Brakes",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy the{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    or the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>?

                    Find out which car is the better choice by comparing the two
                    models based on Price, Size, Space, Boot Space, Service Cost,
                    Mileage, Features, Colours, and other specifications.

                    The{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    starts at Rs. {selectedCars[0]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[0]?.selectedCar?.variant} variant, while the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>{" "}
                    starts at {selectedCars[1]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[1]?.selectedCar?.variant} variant.
                </p>
            ),
        },
        {
            accordionKey: "dimensions-capacity",
            accordionHeader: "Dimensions & Capacity",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy the{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    or the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>?

                    Find out which car is the better choice by comparing the two
                    models based on Price, Size, Space, Boot Space, Service Cost,
                    Mileage, Features, Colours, and other specifications.

                    The{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    starts at Rs. {selectedCars[0]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[0]?.selectedCar?.variant} variant, while the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>{" "}
                    starts at {selectedCars[1]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[1]?.selectedCar?.variant} variant.
                </p>
            ),
        },
        {
            accordionKey: "comfort-convenience",
            accordionHeader: "Comfort & Convenience",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy the{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    or the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>?

                    Find out which car is the better choice by comparing the two
                    models based on Price, Size, Space, Boot Space, Service Cost,
                    Mileage, Features, Colours, and other specifications.

                    The{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    starts at Rs. {selectedCars[0]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[0]?.selectedCar?.variant} variant, while the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>{" "}
                    starts at {selectedCars[1]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[1]?.selectedCar?.variant} variant.
                </p>
            ),

        },
        {
            accordionKey: "interior",
            accordionHeader: "Interior",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy the{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    or the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>?

                    Find out which car is the better choice by comparing the two
                    models based on Price, Size, Space, Boot Space, Service Cost,
                    Mileage, Features, Colours, and other specifications.

                    The{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    starts at Rs. {selectedCars[0]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[0]?.selectedCar?.variant} variant, while the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>{" "}
                    starts at {selectedCars[1]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[1]?.selectedCar?.variant} variant.
                </p>
            ),
        },
        {
            accordionKey: "exterior",
            accordionHeader: "Exterior",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy the{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    or the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>?

                    Find out which car is the better choice by comparing the two
                    models based on Price, Size, Space, Boot Space, Service Cost,
                    Mileage, Features, Colours, and other specifications.

                    The{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    starts at Rs. {selectedCars[0]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[0]?.selectedCar?.variant} variant, while the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>{" "}
                    starts at {selectedCars[1]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[1]?.selectedCar?.variant} variant.
                </p>
            ),
        },
        {
            accordionKey: "adas",
            accordionHeader: "ADAS",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy the{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    or the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>?

                    Find out which car is the better choice by comparing the two
                    models based on Price, Size, Space, Boot Space, Service Cost,
                    Mileage, Features, Colours, and other specifications.

                    The{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    starts at Rs. {selectedCars[0]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[0]?.selectedCar?.variant} variant, while the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>{" "}
                    starts at {selectedCars[1]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[1]?.selectedCar?.variant} variant.
                </p>
            ),
        },
        {
            accordionKey: "advanced-features",
            accordionHeader: "Advanced Features",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy the{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    or the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>?

                    Find out which car is the better choice by comparing the two
                    models based on Price, Size, Space, Boot Space, Service Cost,
                    Mileage, Features, Colours, and other specifications.

                    The{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    starts at Rs. {selectedCars[0]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[0]?.selectedCar?.variant} variant, while the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>{" "}
                    starts at {selectedCars[1]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[1]?.selectedCar?.variant} variant.
                </p>
            ),
        },
        {
            accordionKey: "entertainment-communication",
            accordionHeader: "Entertainment & Communication",
            accordionBody: (selectedCars: CompareCar[]) => (
                <p className="text-[#6B7280]">
                    Should you buy the{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    or the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>?

                    Find out which car is the better choice by comparing the two
                    models based on Price, Size, Space, Boot Space, Service Cost,
                    Mileage, Features, Colours, and other specifications.

                    The{" "}
                    <strong>{selectedCars[0]?.selectedCar?.model}</strong>{" "}
                    starts at Rs. {selectedCars[0]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[0]?.selectedCar?.variant} variant, while the{" "}
                    <strong>{selectedCars[1]?.selectedCar?.model}</strong>{" "}
                    starts at {selectedCars[1]?.selectedCar?.price}
                    {" "} (ex-showroom) for the{" "}
                    {selectedCars[1]?.selectedCar?.variant} variant.
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
                        className="cursor-pointer border my-3 px-4 shadow-[0px_0px_4px_0px_#00000040] rounded-[10px]"
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