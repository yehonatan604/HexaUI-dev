import { TComponent, TComponentOptions } from "../../../../../Data/Types/TComponent";

export type TScrollArea = TComponent<"div"> & {
    options?: TComponentOptions;
    maxHeight: string;
}
