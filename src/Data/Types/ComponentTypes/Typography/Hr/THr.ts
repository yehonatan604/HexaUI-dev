import { TComponent, ComponentOptions } from "../../TComponent";

export type THr = TComponent<"hr"> & {
    options?: HrOptions;
}

export type HrOptions = ComponentOptions & {
    color?: string;
    width?: string;
    height?: string;
}
