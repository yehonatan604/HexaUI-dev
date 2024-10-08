import { TComponent, ComponentOptions } from "../../TComponent";

export type TSelect = TComponent<"select"> & {
    options?: SelectOptions;
    items: TSelectOption[];
}

export type SelectOptions = ComponentOptions & {
    listItemsVariant?: string;
    listItemsBgVariant?: string;
}

export type TSelectOption = {
    value: string;
    label: string;
};
