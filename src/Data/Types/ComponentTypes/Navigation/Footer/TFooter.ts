import { TComponent, ComponentOptions } from "../../TComponent";

export type TFooter = TComponent<"div"> & {
    options?: FooterOptions;
    reserved?: string;
}

export type FooterOptions = ComponentOptions & {
    reservedVariant?: string;
    childrenJustify?: string;
    childrenAlign?: string;
    childrenDirection?: string;
}