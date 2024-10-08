import { TComponent, ComponentOptions } from "../../TComponent";

export type TNavbarBrand = TComponent<"a"> & {
    options?: ComponentOptions;
    as?: React.ElementType;
    to?: string;
}