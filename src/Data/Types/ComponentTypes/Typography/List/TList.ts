import { TComponent, ComponentOptions } from "../../TComponent";

export type TList = TComponent<"ul"> & {
    options: ListOptions;
}

export type ListOptions = ComponentOptions & {
    items: React.ReactElement[] | string[];
    icons?: React.ReactElement[];
    listStyle?: string;
    fontSize?: string;
    flexDirection?: string;
    justify?: string;
    align?: string;
    gap?: number;
    byOrder?: boolean;
}
