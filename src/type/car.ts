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
export type SelectedCar = {
    brand: string;
    model: string;
    variant: string;
};

/**
 * Represents one comparison card.
 */
export type CompareCar = {
    id: string;
    title: string;
    selectedCar: SelectedCar | null;
};