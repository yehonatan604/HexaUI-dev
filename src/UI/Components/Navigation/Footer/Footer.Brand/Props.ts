import { TComponent } from "../../../../../Data/Types/ComponentTypes/TComponent";

export type FooterBrandProps = TComponent<"a"> & {
    as?: React.ElementType;
    to?: string;
};
