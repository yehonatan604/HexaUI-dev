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
    toast: TToast;
};