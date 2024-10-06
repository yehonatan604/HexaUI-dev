import { TComponent } from "../../../../Data/Types/TComponent";

export type RangeInputProps = TComponent<"input"> & {
    label: string;
    variant?: string;
};