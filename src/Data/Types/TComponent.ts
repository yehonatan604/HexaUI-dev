import { JSXElementConstructor, ComponentProps } from "react";
import { TColorPalette } from "./TColorPalette";
import { TComponentOptions } from "./TComponentOptions";

export type TComponent<T extends JSXElementConstructor<unknown> | keyof JSX.IntrinsicElements> = ComponentProps<T> & {
    options?: TComponentOptions;
    theme?: TColorPalette;
}
