import { TComponent, ComponentOptions } from "../../TComponent";

export type TSidebarHeader = TComponent<"div"> & {
    options?: SidebarHeaderOptions;
}

export type SidebarHeaderOptions = ComponentOptions & {
    placement: string;
}