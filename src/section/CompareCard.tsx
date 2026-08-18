import React from 'react'
import { CompareCar, SelectedCar } from "@/type/car";
import { brandAndVariantGroups } from '@/data/carData';
import CarCard from '@/components/comparisionsection/CarCard';

type CompareCardProps = {
    cars: CompareCar[];
    setCars: React.Dispatch<
        React.SetStateAction<CompareCar[]>
    >;

    setShowComparison: React.Dispatch<
        React.SetStateAction<boolean>
    >;

};

const CompareCard = ({ cars, setCars, setShowComparison }: CompareCardProps) => {

    const MAX_CARS = 4;
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
        setCars((prevCars) =>
            prevCars
                .filter((car) => car.id !== carId)
                .map((car, index) => ({
                    ...car,
                    title: `Car ${index + 1}`,
                }))
        );
    };


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
    return (
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 mt-4">
            {cars.length > 0 ? (
                cars.map((car, index) => (
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
                        cars={cars}
                        setShowComparison={setShowComparison}
                    />
                ))
            ) : (
                <>
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
                            removeCarFunction={() => removeCar(car.id)}
                            cars={cars}
                            setShowComparison={setShowComparison}
                        />
                    ))}
                </>
            )}

            {cars.length < MAX_CARS && (
                <button
                    onClick={addCar}
                    className="flex cursor-pointer py-20 flex-col items-center justify-center rounded-[15px] border-2 border-dashed border-dark-blue p-4 transition hover:bg-blue-50"
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
    )
}

export default CompareCard