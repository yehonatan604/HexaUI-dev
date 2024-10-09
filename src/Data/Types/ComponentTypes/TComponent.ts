import { ComponentProps, JSXElementConstructor, JSX } from "react";
import { TColorPalette } from "../TColorPalette";
import { TShadow } from "./TShadow";
import { TBorder } from "./TBorder";

export type TComponent<T extends JSXElementConstructor<unknown> | keyof JSX.IntrinsicElements> = ComponentProps<T> & {
    options?: ComponentOptions;
    theme?: TColorPalette;
}

export type ComponentOptions = {
    bgVariant?: TColorPalette | string;
    textVariant?: TColorPalette | string;
    shadow?: TShadow;
    border?: TBorder;
}
