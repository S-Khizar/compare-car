export type Variant = {
    name: string;
    price: string;
};


export type Model = {
    name: string;
    image: string;
    variants: Variant[];
};

export type GroupOption = {
    brand: string;
    models: Model[];
};

/**
 * Represents the car currently selected by a CarCard.
 */
export interface SelectedCar {
    brand: string;
    model: string;
    variant: string;
    price?: string;
    engineDisplacement?: string;
    maxPower?: string;
    mileage?: string;
    transmission?: string;
    suspensionSteeringBrakes?: string;
    dimensionsCapacity?: string;
    adas?:string;
    comfortConvenience?: string;
    interior?: string;
    exterior?: string;
    advancedFeatures?: string;
    entertainmentCommunication?: string;
}

/**
 * Represents one comparison card.
 */
export type CompareCar = {
    id: string;
    title: string;
    selectedCar: SelectedCar | null;
};