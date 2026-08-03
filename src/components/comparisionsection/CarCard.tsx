import Image from "next/image";
import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Button } from "@base-ui/react";
import { X } from "lucide-react";

type SelectOption = {
    label: string;
    value: string;
};

interface CarCardProps {
    title: string;
    firstSelectOptions: SelectOption[];
    secondSelectOptions: SelectOption[];
    firstPlaceholder?: string;
    secondPlaceholder?: string;
    cardClassName?: string;
    showRemoveCarButton?: boolean;
    removeCarFunction?: () => void;
}

const CarCard = ({
    title,
    firstSelectOptions,
    secondSelectOptions,
    firstPlaceholder = "Select Brand/Model",
    secondPlaceholder = "Select Variant",
    showRemoveCarButton = false,
    removeCarFunction,
    cardClassName
}: CarCardProps) => {
    return (
        <div className={`rounded-[15px] bg-[linear-gradient(135.91deg,rgba(0,136,255,0.25)_0%,rgba(0,81,153,0.25)_100%)] p-0.5 ${cardClassName}`}>
            <div className="rounded-[13px] bg-white p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="bg-dark-blue px-6.5 py-1.5 w-fit rounded-sm">
                        <p className="text-sm text-white font-open-sans font-semibold">{title}</p>
                    </div>

                    {
                        showRemoveCarButton && (
                            <Button className='rounded-[50%] bg-black cursor-pointer p-1  ' onClick={removeCarFunction}>

                                <X color="white" />
                            </Button>
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

                {/* First Select */}
                <Select>
                    <SelectTrigger className="h-14 rounded-xl border border-light-blue bg-white text-sm font-bold text-custom-grey shadow-none">
                        <SelectValue placeholder={firstPlaceholder} />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectGroup>
                            {firstSelectOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>


                {/* Second Select */}
                <Select>
                    <SelectTrigger className="mt-4 h-14 rounded-xl border border-light-blue bg-white text-sm font-bold text-custom-grey shadow-none ">
                        <SelectValue placeholder={secondPlaceholder} />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectGroup>
                            {secondSelectOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default CarCard;