import { TComponent } from "../../../../../Data/Types/TComponent";

export type RainbowBorderProps = TComponent<"div"> & {
    variant?: string;
    borderWidth?: number;
};