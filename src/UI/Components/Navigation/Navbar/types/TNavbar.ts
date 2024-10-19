import { TComponent } from "../../../../../Data/Types/TComponent";
import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TNavbar = TComponent<"div"> & {
    options?: TComponentOptions;
}
