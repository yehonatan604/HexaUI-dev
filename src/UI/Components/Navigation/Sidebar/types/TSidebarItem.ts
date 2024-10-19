import { TComponent } from "../../../../../Data/Types/TComponent";
import { TSidebarItemOptions } from "./TSidebarItemOptions";

export type TSidebarItem = TComponent<"div"> & {
    options?: TSidebarItemOptions;
    label?: string;
    icon?: JSX.Element;
    innerClassName?: string;
}
