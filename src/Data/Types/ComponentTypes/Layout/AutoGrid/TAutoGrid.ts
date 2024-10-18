import { TComponent, ComponentOptions } from "../../TComponent";

export type TAutoGrid = TComponent<"div"> & {
    options?: AutoGridOptions;
    rowsArr: React.ReactNode[];
    cols: number;
}

export type AutoGridOptions = ComponentOptions & {
    borderVariant?: string;
}
