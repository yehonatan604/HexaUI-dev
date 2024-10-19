export type TToastVariants = {
    info?: (message: string) => void;
    success?: (message: string) => void;
    error?: (message: string) => void;
    warning?: (message: string) => void;
};
