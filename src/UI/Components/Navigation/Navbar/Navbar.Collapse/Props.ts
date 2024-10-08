import { TComponent } from "../../../../../Data/Types/ComponentTypes/TComponent";

export type NavbarCollapseProps = TComponent<"div"> & {
    isMobileMenuOpen: boolean;
};