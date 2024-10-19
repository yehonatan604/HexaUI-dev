import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TRainbowBorderOptions = TComponentOptions & {
    thickness?: string;
    gradient?: string;
    innerBgVariant?: string;
    innerTextVariant?: string;
    rounded?: string;
    innerRounded?: string;
}