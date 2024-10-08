import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type CardProps = TComponent<"div"> & {
    shadow?: boolean;
};