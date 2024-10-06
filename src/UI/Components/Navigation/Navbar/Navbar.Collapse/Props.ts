import { TComponent } from "../../../../../Data/Types/TComponent";

export type NavbarCollapseProps = TComponent<"div"> & {
    isMobileMenuOpen: boolean;
};