import { createContext } from "react";

export type AlertStackItem = {
    id: string;
    alert: JSX.Element;
    isVisible: boolean;
};

export type AlertStackContextType = {
    alerts: AlertStackItem[];
    addAlert: (id: string, alert: JSX.Element) => void;
    removeAlert: (id: string) => void;
    toast: {
        info: (message: string) => void;
        success: (message: string) => void;
        error: (message: string) => void;
        warning: (message: string) => void;
    };

};

const ToastStackContext = createContext<AlertStackContextType>({
    alerts: [],
    addAlert: () => { },
    removeAlert: () => { },
    toast: {
        info: () => { },
        success: () => { },
        error: () => { },
        warning: () => { },
    }
});

export { ToastStackContext };
