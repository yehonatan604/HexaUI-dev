import { TComponentOptions, TComponent } from "../../../../../Data/Types/TComponent";

export type TLabel = TComponent<"label"> & {
    options?: TComponentOptions;
    text: string;
}
