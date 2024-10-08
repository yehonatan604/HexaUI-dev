import { IconType } from "react-icons";
import { TComponent, ComponentOptions } from "../../TComponent";

export type TSidebar = TComponent<"div"> & {
    options?: SidebarOptions;
    chevron?: IconType;
}

export type SidebarOptions = ComponentOptions & {
    maxWidth?: string;
    disableClose?: boolean;
}