import { TComponent } from "../../../../../Data/Types/TComponent";
import { TAutoGridOptions } from "./TAutoGridOptions";

export type TAutoGrid = TComponent<"div"> & {
    options?: TAutoGridOptions;
    rowsArr: React.ReactNode[];
    cols: number;
}
