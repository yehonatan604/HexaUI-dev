import { TComponent, ComponentOptions } from "../../TComponent";
import { TSelectOption } from "./TSelectOption";

export type TSelect = TComponent<"select"> & {
    options?: SelectOptions;
    items: TSelectOption[];
}

export type SelectOptions = ComponentOptions & {
    listItemsVariant?: string;
    borderVariant?: string;
}
