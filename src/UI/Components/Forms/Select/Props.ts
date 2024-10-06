import { TComponent } from "../../../../Data/Types/TComponent";
import { TOption } from "../../../../Data/Types/TOption";

export type SelectProps = TComponent<"select"> & {
    options: TOption[];
    variant?: string;
    listItemsVariant?: string;
};