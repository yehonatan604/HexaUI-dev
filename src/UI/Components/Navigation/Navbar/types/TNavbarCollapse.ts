import { TComponent, TComponentOptions } from "../../../../../Data/Types/TComponent";

export type TNavbarCollapse = TComponent<"div"> & {
    options?: TComponentOptions;
    isMobileMenuOpen: boolean;
}