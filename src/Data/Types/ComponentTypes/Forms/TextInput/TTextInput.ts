import { TComponent, ComponentOptions } from "../../TComponent";
import { TRing } from "../../TRing";

export type TTextInput = TComponent<"input"> & {
    options?: TextInputOptions;
    label?: string;
}

export type TextInputOptions = ComponentOptions & {
    helperText?: string;
    helperTextVariant?: string;
    ring?: TRing;
}
