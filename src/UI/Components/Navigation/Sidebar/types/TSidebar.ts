import { IconType } from "react-icons";
import { TComponent } from "../../../../../Data/Types/TComponent";
import { TSidebarOptions } from "./TSidebarOptions";

export type TSidebar = TComponent<"div"> & {
    options?: TSidebarOptions;
    chevron?: IconType;
}
