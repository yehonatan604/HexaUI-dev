import { TComponent, ComponentOptions } from "./ComponentTypes/TComponent";

export type TToastStackItem = {
    id: string;
    toast: JSX.Element;
    isVisible: boolean;
};

export type TToast = {
    info?: (message: string) => void;
    success?: (message: string) => void;
    error?: (message: string) => void;
    warning?: (message: string) => void;
};

export type TToastStackContext = {
    addToast: (id: string, toast: JSX.Element) => void;
    removeToast: (id: string) => void;
    toast: TToast;
};


export type TToastComponentProps = TComponent<"div"> & {
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