import { TComponent } from "../../../../../Data/Types/TComponent";
import { TTableOptions } from "./TTableOptions";

export type TTable = TComponent<"div"> & {
    options?: TTableOptions;
    rowsArr: React.ReactNode[];
}
