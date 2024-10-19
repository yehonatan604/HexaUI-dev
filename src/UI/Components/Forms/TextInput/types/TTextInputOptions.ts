import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";
import { TRingProps } from "../../../../../Data/Types/TRingProps";

export type TTextInputOptions = TComponentOptions & {
    helperText?: string;
    helperTextVariant?: string;
    ring?: TRingProps;
}
