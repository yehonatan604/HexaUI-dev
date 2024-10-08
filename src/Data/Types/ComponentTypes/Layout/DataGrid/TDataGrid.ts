import { TComponent, ComponentOptions } from "../../TComponent";

export type TDataGrid = TComponent<"div"> & {
    options?: DataGridOptions;
    rowsArr: React.ReactNode[];
    cols: number;
}

export type DataGridOptions = ComponentOptions & {
    borderVariant?: string;
}
