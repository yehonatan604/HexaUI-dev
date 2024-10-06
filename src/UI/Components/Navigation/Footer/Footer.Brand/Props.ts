import { TComponent } from "../../../../../Data/Types/TComponent";

export type FooterBrandProps = TComponent<"a"> & {
    as?: React.ElementType;
    to?: string;
};
