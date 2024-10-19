import { TComponent } from "./TComponent";
import { TComponentOptions } from "./TComponentOptions";

export type TBrand = TComponent<"a"> & {
    options?: TComponentOptions;
    as?: React.ElementType;
    to?: string;
}