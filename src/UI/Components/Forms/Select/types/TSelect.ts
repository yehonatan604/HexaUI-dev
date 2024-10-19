import { TComponent } from "../../../../../Data/Types/TComponent";
import { TSelectArrItem } from "./TSelectArrItem";
import { TSelectOptions } from "./TSelectOptions";

export type TSelect = TComponent<"select"> & {
    options?: TSelectOptions;
    items: TSelectArrItem[];
}
