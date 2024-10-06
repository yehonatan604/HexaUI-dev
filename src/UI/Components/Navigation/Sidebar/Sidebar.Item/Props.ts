import { TComponent } from "../../../../../Data/Types/TComponent";

export type SidebarItemProps = TComponent<"div"> & {
    icon?: JSX.Element;
    label?: string;
    labelVariant?: string;
};