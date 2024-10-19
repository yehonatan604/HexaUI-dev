import { useContext } from "react";
import { ToastStackContext } from "../Toast.context";

const useToast = () => {
    const context = useContext(ToastStackContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return {
        addToast: context.addToast,
        removeToast: context.removeToast,
        toast: context.toast
    };
};
export default useToast;