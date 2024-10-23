import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TDropMenuOptions = TComponentOptions & {
    width?: string;
    titlePadding?: string;
    titleVariant?: string;
    titleSize?: string | Sizes;
    gap?: string;
    titleDivGap?: string;
}