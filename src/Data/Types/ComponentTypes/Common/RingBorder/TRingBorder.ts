import { TComponent, ComponentOptions } from "../../TComponent";

export type TRingBorder = TComponent<"div"> & {
    options?: RingBorderOptions;
}

export type RingBorderOptions = ComponentOptions & {
    borderThickness?: number;
    ringThickness?: number;
    borderVariant?: string;
    ringVariant?: string;
    padding?: number;
    rounded?: string
}