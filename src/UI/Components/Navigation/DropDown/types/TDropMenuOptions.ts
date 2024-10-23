import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TDropMenuOptions = TComponentOptions & {
    width?: string;
    titlePadding?: string;
    titleVariant?: string;
    titleSize?: string | Sizes;
    contentPadding?: string;
    chevronVariant?: string;
    chevronSize?: string;
    chevronDirection?: string;
    icon?: JSX.Element;
    gap?: string;
    titleDivGap?: string;
}