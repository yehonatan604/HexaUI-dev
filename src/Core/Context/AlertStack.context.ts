import { createContext } from "react";

export type AlertStackItem = {
    id: string;
    alert: JSX.Element;
};

export type AlertStackContextType = {
    alerts: AlertStackItem[];
    addAlert: (alert: JSX.Element) => void;
    removeAlert: (id: string) => void;
};

const AlertStackContext = createContext<AlertStackContextType>({
    alerts: [],
    addAlert: () => { },
    removeAlert: () => { }
});

export { AlertStackContext };
