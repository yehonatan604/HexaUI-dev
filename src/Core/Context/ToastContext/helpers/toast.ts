import { TToastVariants } from "../../../../UI/Components/Core/Toast/types/TToastVariants";

let toastInstance: TToastVariants = {};

export const setToastInstance = (instance: TToastVariants) => {
    toastInstance = instance;
};

export const toast = {
    info: (message: string) => toastInstance?.info?.(message),
    success: (message: string) => toastInstance?.success?.(message),
    error: (message: string) => toastInstance?.error?.(message),
    warning: (message: string) => toastInstance?.warning?.(message),
};
