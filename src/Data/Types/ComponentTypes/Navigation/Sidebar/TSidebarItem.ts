import { TComponent, ComponentOptions } from "../../TComponent";

export type TSidebarItem = TComponent<"div"> & {
    options?: SidebarItemOptions;
    label?: string;
    icon?: JSX.Element;
    innerClassName?: string;
}

export type SidebarItemOptions = ComponentOptions & {
    labelBgVariant?: string;
    labelVariant?: string;
    hoverBgVariant?: string;
    hoverTextVariant?: string;
    disableOpacityOnHover?: boolean;
}