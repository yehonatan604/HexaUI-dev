import { JSX } from "react";
import { TComponent, ComponentOptions } from "../../TComponent";
import { Tsize } from "../../../TSize";
import { TRing } from "../../TRing";

export type TButton = TComponent<"button"> & {
    options?: ButtonOptions;
}

export type ButtonOptions = ComponentOptions & {
    padding?: string;
    icon?: JSX.Element;
    iconPosition?: string;
    label?: string;
    size?: Tsize | string;
    rounded?: boolean;
    roundedS?: boolean;
    roundedE?: boolean;
    ring?: TRing;
}
