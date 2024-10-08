import { TComponent, ComponentOptions } from "../../TComponent";

export type TRangeInput = TComponent<"input"> & {
    options?: RangeInputOptions;
    label: string;
}

export type RangeInputOptions = ComponentOptions & {
    rangeVariant?: string;
}
