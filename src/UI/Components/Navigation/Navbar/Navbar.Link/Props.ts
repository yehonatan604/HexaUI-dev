import { TComponent } from "../../../../../Data/Types/ComponentTypes/TComponent";

export type NavbarLinkProps = TComponent<"a"> & {
    to: string;
    activeColor?: string;
};