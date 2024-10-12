import { JSX } from "react";
import { TComponent, ComponentOptions } from "../../TComponent";

export type TAlert = TComponent<"div"> & {
    options?: AlertOptions;
    show: boolean;
    setShow: (show: boolean) => void;
    onFinished?: () => void;
}

export type AlertOptions = ComponentOptions & {
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    icon?: JSX.Element;
    type?: 'success' | 'info' | 'warning' | 'failure';
    title?: string;
    titleVariant?: string;
}
