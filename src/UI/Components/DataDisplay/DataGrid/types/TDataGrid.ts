import { TComponent } from "../../../../../Data/Types/TComponent";
import { TDataGridOptions } from "./TDataGridOptions";

export type TDataGrid = TComponent<"div"> & {
    options?: TDataGridOptions;
    rowsArr: React.ReactNode[];
}
