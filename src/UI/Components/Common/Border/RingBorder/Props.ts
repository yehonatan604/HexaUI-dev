import { TComponent } from "../../../../../Data/Types/TComponent";

export type RingBorderProps = TComponent<"div"> & {
    variant?: string;
    borderWidth?: string;
    ringWidth?: string;
};