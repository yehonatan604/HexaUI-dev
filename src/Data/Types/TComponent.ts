import { ComponentProps, JSXElementConstructor, JSX } from "react";
import { TShadow } from "./TShadow";
import { TBorder } from "./TBorder";
import { TColorPalette } from "./TColorPalette";

export type TComponent<T extends JSXElementConstructor<unknown> | keyof JSX.IntrinsicElements> = ComponentProps<T> & {
    options?: TComponentOptions;
    theme?: TColorPalette;
}

export type TComponentOptions = {
    bgVariant?: TColorPalette | string;
    textVariant?: TColorPalette | string;
    shadow?: TShadow;
    border?: TBorder;
}
