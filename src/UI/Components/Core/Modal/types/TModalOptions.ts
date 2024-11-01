import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";
import { TRingProps } from "../../../../../Data/Types/TRingProps";
import { TSize } from "../../../../../Data/Types/TSize";

export type TModalOptions = TComponentOptions & {
    size?: TSize;
    ringProps?: TRingProps;
    title?: string;
    subtitle?: string;
    content?: string;
    showCloseButton?: boolean;
    showFooter?: boolean;
    showHeader?: boolean;
    showTitle?: boolean;
    showSubtitle?: boolean;
    showContent?: boolean;
    showRing?: boolean;
    showRingText?: boolean;
    showRingIcon?: boolean;
    showRingImage?: boolean;
    showRingIconText?: boolean;
    showRingIconImage?: boolean;
    showRingTextImage?: boolean;
}