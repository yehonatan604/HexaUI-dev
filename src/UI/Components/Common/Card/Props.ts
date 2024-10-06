import { TComponent } from "../../../../Data/Types/TComponent";

export type CardProps = TComponent<"div"> & {
    shadow?: boolean;
};