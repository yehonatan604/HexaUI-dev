import { TComponent } from "../../../../../Data/Types/TComponent";
import { TCheckboxOptions } from "./TCheckboxOptions";

export type TCheckbox = TComponent<"input"> & {
    options?: TCheckboxOptions;
    label: string;
}
