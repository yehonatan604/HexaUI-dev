import { TComponent } from "../../../../../Data/Types/TComponent";
import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TNavbarCollapse = TComponent<"div"> & {
    options?: TComponentOptions;
    isMobileMenuOpen: boolean;
}