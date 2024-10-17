import { TComponent, ComponentOptions } from "../../TComponent";

export type TRing
    = TComponent<"div"> & {
        options?: RingOptions;
    }

export type RingOptions = ComponentOptions & {
    borderThickness?: number;
    ringThickness?: number;
    borderVariant?: string;
    ringVariant?: string;
    padding?: number;
    rounded?: string
}