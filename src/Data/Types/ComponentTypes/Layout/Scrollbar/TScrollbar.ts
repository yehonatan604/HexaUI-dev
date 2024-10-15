import { TComponent, ComponentOptions } from "../../TComponent";

export type TScrollbar = TComponent<"div"> & {
    options?: ComponentOptions;
    maxHeight?: string;
}
