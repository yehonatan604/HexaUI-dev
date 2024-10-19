import { TComponent } from "../../../../../Data/Types/TComponent";
import { TButtonOptions } from "./TButtonOptions";

export type TButton = TComponent<"button"> & {
    options?: TButtonOptions;
}
