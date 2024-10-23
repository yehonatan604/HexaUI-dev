import { TComponent } from "../../../../../Data/Types/TComponent";
import { TDropMenuOptions } from "./TDropMenuOptions";

export type TDropMenu = TComponent<"div"> & {
    options?: TDropMenuOptions;
    title: string;
    innerClassName?: string;
    titleDivClassName?: string;
    type?: 'horizontal' | 'vertical';
}
