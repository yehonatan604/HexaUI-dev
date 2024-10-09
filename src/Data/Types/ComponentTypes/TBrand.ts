import { TComponent, ComponentOptions } from "./TComponent";

export type TBrand = TComponent<"a"> & {
    options?: ComponentOptions;
    as?: React.ElementType;
    to?: string;
}