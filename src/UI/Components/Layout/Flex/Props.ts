import { TComponent } from "../../../../Data/Types/TComponent";

export type FlexProps = TComponent<"div"> & {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
};