import { createContext } from "react";
import { TToastStackContext } from "../Helpers/Toast/types/Toast.types";

const ToastStackContext = createContext<TToastStackContext>({
    toast: {
        info: () => { },
        success: () => { },
        error: () => { },
        warning: () => { },
    }
});

export { ToastStackContext };
