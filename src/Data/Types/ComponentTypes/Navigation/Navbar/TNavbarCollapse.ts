import { TComponent, ComponentOptions } from "../../TComponent";

export type TNavbarCollapse = TComponent<"div"> & {
    options?: ComponentOptions;
    isMobileMenuOpen: boolean;
}