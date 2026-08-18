import Image from "next/image";
import { Button } from "@base-ui/react";
import { X } from "lucide-react";
import { Combobox, ComboboxCollection, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, } from "../ui/combobox";
import { CompareCar, GroupOption, SelectedCar } from "@/type/car";




type CarCardProps = {
    title: string;
    firstSelectOptions: GroupOption[];
    cars: CompareCar[];
    selectedCar: SelectedCar | null;

    firstPlaceholder?: string;
    secondPlaceholder?: string;

    onCarSelect: (car: SelectedCar | null) => void;

    cardClassName?: string;

    showRemoveCarButton?: boolean;
    removeCarFunction?: () => void;

    setShowComparison: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

const CarCard = ({
    title,
    firstSelectOptions,
    cars,
    selectedCar,
    firstPlaceholder = "Select Brand/Model",
    secondPlaceholder = "Select Variant",
    showRemoveCarButton = false,
    removeCarFunction,
    cardClassName,
    onCarSelect,

    setShowComparison
}: CarCardProps) => {
    const selectedBrand = selectedCar?.brand ?? "";
    const selectedModel = selectedCar?.model ?? "";
    const selectedVariant = selectedCar?.variant ?? "";

    const brand = firstSelectOptions.find(
        b => b.brand === selectedBrand
    );

    const model = brand?.models.find(
        m => m.name === selectedModel
    );

    const variantOptions =
        model?.variants ?? [];
    const carItems = firstSelectOptions.flatMap((group) =>
        group.models.map((model) => ({
            brand: group.brand,
            name: model.name,
            image: model.image,
            variants: model.variants,
        }))
    );

    return (
        <div className={`rounded-[15px] bg-[linear-gradient(135.91deg,rgba(0,136,255,0.25)_0%,rgba(0,81,153,0.25)_100%)] p-0.5 flex flex-col h-full ${cardClassName}`}>
            <div className="rounded-[13px] bg-white p-5 flex-1 flex flex-col ">
                {
                    selectedBrand && selectedModel && selectedVariant ? (
                        <div className="flex flex-col flex-1">

                            <div className="overflow-hidden  flex flex-col flex-1 justify-between">
                                <div className="relative">
                                    <div className=" w-full overflow-hidden ">
                                        <Image
                                            src={model?.image ?? ""}
                                            alt={model?.name ?? ""}
                                            width={100}
                                            height={100}
                                            className="w-full rounded-xl object-contain"
                                        />
                                    </div>
                                    <button
                                        onClick={() => {
                                            onCarSelect(null);
                                            if (cars.length > 2) {
                                                removeCarFunction?.();
                                            }
                                            setShowComparison(false);
                                        }}
                                        className="absolute top-2 right-2 text-custom-grey text-sm font-semibold hover:text-dark-blue transition cursor-pointer">
                                        <Image
                                            src="/compareCar/close.svg"
                                            alt="Close"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                </div>

                                <div className="pt-2 md:pt-5 bg-white flex flex-col gap-y-1 text-sm font-semibold">
                                    <div className="flex items-center gap-2">
                                        <h2 className="font-semibold font-open-sans">
                                            {selectedBrand} {model?.name}
                                        </h2>


                                    </div>

                                    <p className="mt-1 text-sm  text-[#737373] font-open-sans font-semibold">
                                        Variant: {variantOptions.find(v => v.name === selectedVariant)?.name ?? ""}
                                    </p>

                                    <p className=" md:mt-3  font-semibold font-open-sans ">
                                        {variantOptions.find(v => v.name === selectedVariant)?.price ?? ""}
                                        <sup>*</sup>
                                    </p>

                                    <Button className="w-full text-[12px] border border-[#004C8F]  py-3 cursor-pointer hover:bg-[#004C8F]/10 transition mt-1 md:mt-4 rounded-lg">
                                        <p className="font-open-sans font-semibold text-[#004C8F]">
                                            View July Offers
                                        </p>
                                    </Button>
                                </div>
                            </div>



                        </div>
                    ) : (
                        <div className="flex flex-col justify-between h-full">
                            {/* Header */}
                            <div>
                                <div className="relative flex items-center justify-between">
                                    <div className="bg-dark-blue px-6.5 py-1.5 w-fit rounded-sm">
                                        <p className="text-sm text-white font-open-sans font-semibold">{title}</p>
                                    </div>

                                    {
                                        showRemoveCarButton && (
                                            <button
                                                onClick={removeCarFunction}
                                                className="absolute top-2 right-2 text-custom-grey text-sm font-semibold hover:text-dark-blue transition cursor-pointer">
                                                <Image
                                                    src="/compareCar/close.svg"
                                                    alt="Close"
                                                    width={20}
                                                    height={20}
                                                />

                                            </button>
                                        )
                                    }
                                </div>

                                {/* Car Image */}
                                <div className="flex flex-col items-center justify-center  pb-6">
                                    <div className="w-22 h-22 rounded-full bg-[#0088FF]/25 flex items-center justify-center">
                                        <Image
                                            src="/compareCar/car.png"
                                            alt="car"
                                            width={60}
                                            height={60}
                                        />
                                    </div>

                                    <p className="text-center text-custom-grey font-normal mt-2 font-poppins">Add Car</p>
                                </div>
                            </div>

                            <div>
                                {/* First Select */}
                                <Combobox
                                    items={carItems}
                                    value={selectedModel}
                                    onValueChange={(value) => {
                                        if (!value) {
                                            onCarSelect(null);
                                            return;
                                        }

                                        const selectedItem = carItems.find(
                                            (item) => item.name === value
                                        );

                                        if (selectedItem) {
                                            onCarSelect({
                                                brand: selectedItem.brand,
                                                model: selectedItem.name,
                                                variant: "",
                                            });
                                        }
                                    }}
                                >
                                    <ComboboxInput
                                        placeholder={firstPlaceholder}
                                        className="h-14 rounded-xl border border-light-blue bg-white text-sm font-bold text-custom-grey shadow-none"
                                        showTrigger
                                        showClear
                                        hasValue={!!selectedModel}

                                    />

                                    <ComboboxContent className="max-h-80 overflow-y-auto rounded-xl border border-light-blue">
                                        <ComboboxEmpty>
                                            No cars found.
                                        </ComboboxEmpty>

                                        <ComboboxCollection>
                                            {(item) => (
                                                <ComboboxItem
                                                    key={`${item.brand}-${item.name}`}
                                                    value={item.name}
                                                >
                                                    <div>
                                                        <p>{item.name}</p>
                                                        <p className="text-xs text-gray-500">
                                                            {item.brand}
                                                        </p>
                                                    </div>
                                                </ComboboxItem>
                                            )}
                                        </ComboboxCollection>
                                    </ComboboxContent>
                                </Combobox>


                                {/* Second Select */}
                                <div className={`mt-4 ${!model ? "opacity-50 cursor-not-allowed" : ""}`}>
                                    <Combobox
                                        items={variantOptions}
                                        value={selectedVariant}
                                        onValueChange={(value) => {
                                            if (!value) {
                                                onCarSelect({
                                                    brand: selectedBrand,
                                                    model: selectedModel,
                                                    variant: "",
                                                });

                                                return;
                                            }

                                            onCarSelect({
                                                brand: selectedBrand,
                                                model: selectedModel,
                                                variant: value,
                                            });
                                        }}
                                        disabled={!model}
                                    >
                                        <ComboboxInput
                                            placeholder={secondPlaceholder}
                                            className={`mt-4 h-14 rounded-xl border border-light-blue bg-white text-sm font-bold text-custom-grey shadow-none ${!model ? "opacity-50 cursor-not-allowed" : ""}`}
                                            showClear
                                            hasValue={!!selectedVariant}
                                            disabled={!model}

                                        />

                                        <ComboboxContent className="rounded-xl border border-light-blue">
                                            <ComboboxEmpty>
                                                No variant found.
                                            </ComboboxEmpty>

                                            <ComboboxCollection>
                                                {(variant) => (
                                                    <ComboboxItem
                                                        key={variant.name}
                                                        value={variant.name}
                                                    >
                                                        <div className="flex w-full justify-between">
                                                            <span>{variant.name}</span>

                                                            <span className="text-muted-foreground text-xs">
                                                                {variant.price}
                                                            </span>
                                                        </div>
                                                    </ComboboxItem>
                                                )}
                                            </ComboboxCollection>
                                        </ComboboxContent>
                                    </Combobox>

                                </div>

                            </div>
                        </div>
                    )
                }




            </div>
        </div>
    );
};

export default CarCard;