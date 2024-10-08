import { TComponent, ComponentOptions } from "../../TComponent";

export type TSidebarItem = TComponent<"div"> & {
    options?: SidebarItemOptions;
    label?: string;
    icon?: JSX.Element;
}

export type SidebarItemOptions = ComponentOptions & {
    labelBgVariant?: string;
    labelVariant?: string;
}