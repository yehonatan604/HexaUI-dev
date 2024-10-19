import { TBorder } from "./TBorder";
import { TColorPalette } from "./TColorPalette";
import { TShadow } from "./TShadow";

export type TComponentOptions = {
    bgVariant?: TColorPalette | string;
    textVariant?: TColorPalette | string;
    shadow?: TShadow;
    border?: TBorder;
}
