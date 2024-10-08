import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";
import { TSelectOption } from "../../../../Data/Types/ComponentTypes/Forms/Select/TSelectOption";

export type SelectProps = TComponent<"select"> & {
    options: TSelectOption[];
    variant?: string;
    listItemsVariant?: string;
};