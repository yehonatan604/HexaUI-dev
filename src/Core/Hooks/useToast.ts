import { useContext } from "react";
import { ToastStackContext } from "../Context/ToasttStack.context";

const useToast = () => {
    const context = useContext(ToastStackContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return {
        alerts: context.toastStackItems,
        addAlert: context.addToast,
        removeAlert: context.removeToast,
        toast: context.toast,
    };
};
export default useToast;