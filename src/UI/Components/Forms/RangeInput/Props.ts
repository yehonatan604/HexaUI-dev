import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type RangeInputProps = TComponent<"input"> & {
    label: string;
    variant?: string;
};