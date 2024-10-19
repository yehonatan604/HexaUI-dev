import { TComponent } from "../../../../../Data/Types/TComponent";
import { TSidebarHeaderOptions } from "./TSidebarHeaderOptions";

export type TSidebarHeader = TComponent<"div"> & {
    options?: TSidebarHeaderOptions;
}
