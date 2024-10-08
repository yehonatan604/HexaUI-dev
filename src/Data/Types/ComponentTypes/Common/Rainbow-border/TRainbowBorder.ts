import { TComponent, ComponentOptions } from "../../TComponent";

export type TRainbowBorder = TComponent<"div"> & {
    options?: RainbowBorderOptions;
    innerClassName?: string;
}

export type RainbowBorderOptions = ComponentOptions & {
    thickness?: string;
    gradient?: string;
    innerBgVariant?: string;
    innerTextVariant?: string;
    rounded?: string;
    innerRounded?: string;
}
