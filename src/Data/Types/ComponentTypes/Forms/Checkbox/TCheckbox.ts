import { TComponent, ComponentOptions } from "../../TComponent";
import { TRing } from "../../TRing";

export type TCheckbox = TComponent<"input"> & {
    options?: CheckboxOptions;
    label: string;
}

export type CheckboxOptions = ComponentOptions & {
    showBgColor?: boolean;
    ring?: TRing;
}
