import { TComponent } from "../../../../../Data/Types/TComponent";
import { TRingOptions } from "./TRingOptions";

export type TRing
    = TComponent<"div"> & {
        options?: TRingOptions;
    }

