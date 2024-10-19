import { TComponent } from "../../../../../Data/Types/TComponent";
import { TNavbarLinkOptions } from "./TNavbarLinkOptions";

export type TNavbarLink = TComponent<"a"> & {
    options?: TNavbarLinkOptions;
    to: string;
}
