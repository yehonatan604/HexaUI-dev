import { TComponent } from "../../../../../Data/Types/TComponent";

export type NavbarLinkProps = TComponent<"a"> & {
    to: string;
    activeColor?: string;
};