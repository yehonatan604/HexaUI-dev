import { TComponent, TComponentOptions } from "../../../../../Data/Types/TComponent";

export type TFooter = TComponent<"div"> & {
    options?: TFooterOptions;
    reserved?: string;
}

export type TFooterOptions = TComponentOptions & {
    reservedVariant?: string;
    childrenJustify?: string;
    childrenAlign?: string;
    childrenDirection?: string;
}