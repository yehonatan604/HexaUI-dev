import { TComponent } from "../../../../Data/Types/TComponent";

export type TitleProps = TComponent<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> & {
    children: string;
    size?: string;
    color?: string;
};