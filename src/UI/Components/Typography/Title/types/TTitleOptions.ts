import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TTitleOptions = TComponentOptions & {
    align?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    padding?: string;
}
