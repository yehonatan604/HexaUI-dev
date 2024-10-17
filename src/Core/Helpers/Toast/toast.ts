import { TToast } from "../../../Data/Types/TToast";

let toastInstance: TToast = {};

export const setToastInstance = (instance: TToast) => {
    toastInstance = instance;
};

export const toast = {
    info: (message: string) => toastInstance?.info?.(message),
    success: (message: string) => toastInstance?.success?.(message),
    error: (message: string) => toastInstance?.error?.(message),
    warning: (message: string) => toastInstance?.warning?.(message),
};
