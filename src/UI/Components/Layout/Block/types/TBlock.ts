import { TComponent } from "../../../../../Data/Types/TComponent";
import { TBlockOptions } from "./TBlockOptions";

export type TBlock = TComponent<"div"> & {
    options?: TBlockOptions;
    innerClassName?: string;
    inline?: boolean;
}
