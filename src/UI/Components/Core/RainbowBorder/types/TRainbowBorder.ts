import { TComponent } from "../../../../../Data/Types/TComponent";
import { TRainbowBorderOptions } from "./TRainbowBorderOptions";

export type TRainbowBorder = TComponent<"div"> & {
    options?: TRainbowBorderOptions;
    innerClassName?: string;
}
