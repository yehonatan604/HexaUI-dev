import { TComponent } from "../../../../../Data/Types/TComponent";
import { TListOptions } from "./TListOptions";

export type TList = TComponent<"ul"> & {
    options: TListOptions;
}
