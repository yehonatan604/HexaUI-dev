import { TComponent, TComponentOptions } from "./TComponent";

export type TBrand = TComponent<"a"> & {
    options?: TComponentOptions;
    as?: React.ElementType;
    to?: string;
}