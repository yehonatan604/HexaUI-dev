import { TComponent } from "../../../../../Data/Types/TComponent";
import { TTitleOptions } from "./TTitleOptions";

export type TTitle = TComponent<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> & {
    options?: TTitleOptions;
};
