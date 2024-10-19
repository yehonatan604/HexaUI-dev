import { TComponentOptions } from "../../../../../Data/Types/TComponent";
import { TRingProps } from "../../../../../Data/Types/TRingProps";

export type TTextInputOptions = TComponentOptions & {
    helperText?: string;
    helperTextVariant?: string;
    ring?: TRingProps;
}
