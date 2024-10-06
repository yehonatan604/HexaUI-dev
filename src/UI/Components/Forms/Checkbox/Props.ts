import { TComponent } from "../../../../Data/Types/TComponent";

export type CheckboxProps = TComponent<"input"> & {
    label: string;
    variant?: string;
    showBgColor?: boolean;
};