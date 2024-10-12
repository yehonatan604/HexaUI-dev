import { useContext } from "react";
import { AlertStackContext } from "../Context/AlertStack.context";

const useAlertStack = () => {
    const context = useContext(AlertStackContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return {
        alerts: context.alerts,
        addAlert: context.addAlert,
        removeAlert: context.removeAlert,
    };
};
export default useAlertStack;