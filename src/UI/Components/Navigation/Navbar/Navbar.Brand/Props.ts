import { TComponent } from "../../../../../Data/Types/TComponent";

export type NavbarBrandProps = TComponent<"a"> & {
    as?: React.ElementType;
    to?: string;
};