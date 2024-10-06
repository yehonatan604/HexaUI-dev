import { TComponent } from "../../../../Data/Types/TComponent";

export type TextInputProps = TComponent<"input"> & {
    label: string;
    color?: string;
    helperText?: string;
};