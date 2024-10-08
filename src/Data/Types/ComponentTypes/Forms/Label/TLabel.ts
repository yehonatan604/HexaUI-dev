import { TComponent, ComponentOptions } from "../../TComponent";

export type TLabel = TComponent<"label"> & {
    options?: ComponentOptions;
    text: string;
}
