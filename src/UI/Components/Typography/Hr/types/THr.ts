import { TComponent } from "../../../../../Data/Types/TComponent";
import { THrOptions } from "./THrOptions";

export type THr = TComponent<"hr"> & {
    options?: THrOptions;
}
