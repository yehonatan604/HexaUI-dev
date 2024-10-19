import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";
import { TRingProps } from "../../../../../Data/Types/TRingProps";
import { TSize } from "../../../../../Data/Types/TSize";

export type TButtonOptions = TComponentOptions & {
    padding?: string;
    icon?: JSX.Element;
    iconPosition?: string;
    label?: string;
    size?: TSize | string;
    rounded?: boolean;
    roundedS?: boolean;
    roundedE?: boolean;
    ring?: TRingProps;
}