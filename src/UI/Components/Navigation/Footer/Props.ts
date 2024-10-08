import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type FooterProps = TComponent<"div"> & {
    reserved?: string;
    reservedColor?: string;
    bgColor?: string;
    textColor?: string;
    childrenJustify?: string;
    childrenAlign?: string;
    childrenDirection?: string;
};