import { createContext } from "react";
import { TToastStackContext } from "./types/TToastStackContext";

const ToastStackContext = createContext<TToastStackContext>({
    removeToast: () => { },
    addToast: () => { },
    toast: {
        info: () => { },
        success: () => { },
        error: () => { },
        warning: () => { },
    }
});

export { ToastStackContext };
