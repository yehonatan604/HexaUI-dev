import { useContext } from "react";
import { ToastStackContext } from "../Context/ToasttStack.context";

const useToast = () => {
    const context = useContext(ToastStackContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return {
        alerts: context.alerts,
        addAlert: context.addAlert,
        removeAlert: context.removeAlert,
        toast: context.toast,
    };
};
export default useToast;