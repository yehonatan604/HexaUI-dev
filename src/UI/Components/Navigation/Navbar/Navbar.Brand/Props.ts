import { TComponent } from "../../../../../Data/Types/ComponentTypes/TComponent";

export type NavbarBrandProps = TComponent<"a"> & {
    as?: React.ElementType;
    to?: string;
};