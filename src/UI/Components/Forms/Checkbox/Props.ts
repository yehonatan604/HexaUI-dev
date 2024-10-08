import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type CheckboxProps = TComponent<"input"> & {
    label: string;
    variant?: string;
    showBgColor?: boolean;
};