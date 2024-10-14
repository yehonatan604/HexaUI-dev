import { JSX } from "react";
import { TComponent, ComponentOptions } from "../../../../Data/Types/ComponentTypes/TComponent";

export type TToast = TComponent<"div"> & {
    options?: ToastOptions;
    onFinished?: () => void;
    top?: number;
    isVisible?: boolean;
}

export type ToastOptions = ComponentOptions & {
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    icon?: JSX.Element;
    type?: 'success' | 'info' | 'warning' | 'failure';
    title?: string;
    titleVariant?: string;
}