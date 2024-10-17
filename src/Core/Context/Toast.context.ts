import { createContext } from "react";
import { TToastStackContext } from "../../Data/Types/TToast";

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
