import { TComponent, ComponentOptions } from "../../TComponent";

export type TDataGrid = TComponent<"div"> & {
    options?: FlexOptions;
    rowsArr: React.ReactNode[];
    cols: number;
}

export type FlexOptions = ComponentOptions & {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
}
