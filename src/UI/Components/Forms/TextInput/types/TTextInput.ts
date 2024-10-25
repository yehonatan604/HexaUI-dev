import { TComponent } from "../../../../../Data/Types/TComponent";
import { TTextInputOptions } from "./TTextInputOptions";

export type TTextInput = TComponent<"input"> & {
    options?: TTextInputOptions;
    label?: string;
    innerClassName?: string;
    searchIcon?: boolean;
}
