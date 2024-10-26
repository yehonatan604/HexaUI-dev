import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";
import { TRingProps } from "../../../../../Data/Types/TRingProps";

export type TFloatingLabelOptions = TComponentOptions & {
    helperText?: string;
    helperTextVariant?: string;
    ring?: TRingProps;
    labelTextVariant?: string;
    labelBgVariant?: string;
    type?: 'underlined' | 'bordered';
}
