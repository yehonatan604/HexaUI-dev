import { TComponent } from "../../../../../Data/Types/ComponentTypes/TComponent";

export type RingBorderProps = TComponent<"div"> & {
    variant?: string;
    borderWidth?: string;
    ringWidth?: string;
};