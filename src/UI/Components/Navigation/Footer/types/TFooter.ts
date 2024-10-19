import { TComponent } from "../../../../../Data/Types/TComponent";
import { TFooterOptions } from "./TFooterOptions";

export type TFooter = TComponent<"div"> & {
    options?: TFooterOptions;
    reserved?: string;
}
