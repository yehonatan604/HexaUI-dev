import { TComponent } from "../../../../../Data/Types/TComponent";
import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TColorPicker = TComponent<"div"> & {
    options?: TComponentOptions;
    enfoeceTheme?: "light" | "dark";
    typePicker?: boolean;
    alpha?: boolean;
    saturation?: boolean;
    hue?: boolean;
    pipette?: boolean;
}

