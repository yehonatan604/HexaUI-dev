import { TComponent, ComponentOptions } from "../../TComponent";

export type TSidebar = TComponent<"div"> & {
    options?: SidebarOptions;
}

export type SidebarOptions = ComponentOptions & {
    maxWidth?: string;
}