import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type TextInputProps = TComponent<"input"> & {
    label: string;
    color?: string;
    helperText?: string;
};