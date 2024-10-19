import { TComponent } from "../../../../../Data/Types/TComponent";
import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TLabel = TComponent<"label"> & {
    options?: TComponentOptions;
    text: string;
}
