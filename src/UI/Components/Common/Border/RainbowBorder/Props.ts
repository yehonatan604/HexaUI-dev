import { TComponent } from "../../../../../Data/Types/ComponentTypes/TComponent";

export type RainbowBorderProps = TComponent<"div"> & {
    variant?: string;
    borderWidth?: number;
};