import { TComponent } from "../../../../../Data/Types/TComponent";
import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TScrollArea = TComponent<"div"> & {
    options?: TComponentOptions;
    maxHeight: string;
}
