import { TComponent, ComponentOptions } from "../../TComponent";

export type TTitle = TComponent<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> & {
    options?: TTitleOptions;
};

export type TTitleOptions = ComponentOptions & {
    align?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    padding?: string;
}