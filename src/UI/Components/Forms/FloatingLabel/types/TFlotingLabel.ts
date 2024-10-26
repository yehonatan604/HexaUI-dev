import { TComponent } from "../../../../../Data/Types/TComponent";
import { TFloatingLabelOptions } from "./TFloatingLabelOptions";

export type TFloatingLabel = TComponent<"input"> & {
    options?: TFloatingLabelOptions;
    label: string;
    innerClassName?: string;
}
