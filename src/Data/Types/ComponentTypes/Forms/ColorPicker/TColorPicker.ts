import { TComponent, ComponentOptions } from "../../TComponent";

export type TColorPicker = TComponent<"div"> & {
    options?: ComponentOptions;
}

