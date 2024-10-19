import { TComponent } from "../../../../../Data/Types/TComponent";
import { TRangeInputOptions } from "./TRangeInputOptions";

export type TRangeInput = TComponent<"input"> & {
    options?: TRangeInputOptions;
    label: string;
}
