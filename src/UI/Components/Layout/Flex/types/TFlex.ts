import { TComponent } from "../../../../../Data/Types/TComponent";
import { TFlexOptions } from "./TFlexOptions";

export type TFlex = TComponent<"div"> & {
    options?: TFlexOptions;
    center?: boolean;
    end?: boolean;
}
