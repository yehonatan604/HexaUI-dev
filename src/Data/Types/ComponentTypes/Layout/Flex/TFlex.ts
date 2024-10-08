import { TComponent, ComponentOptions } from "../../TComponent";

export type TFlex = TComponent<"div"> & {
    options?: FlexOptions;
}

export type FlexOptions = ComponentOptions & {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
}