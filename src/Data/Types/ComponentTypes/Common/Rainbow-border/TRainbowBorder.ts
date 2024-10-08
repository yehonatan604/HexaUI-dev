import { TComponent, ComponentOptions } from "../../TComponent";

export type TRainbowBorder = TComponent<"div"> & {
    options?: RainbowBorderOptions;
}

export type RainbowBorderOptions = ComponentOptions & {
    thickness?: number;
    gradient: string;
}
