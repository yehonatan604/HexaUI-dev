import { useContext } from "react";
import { ThemeContext } from "../Theme.context";

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return {
        mode: context.mode,
        toggleTheme: context.toggleTheme,
        colors: context.colors,
        setColors: context.setColors,
        gradients: context.gradients,
        setGradients: context.setGradients
    };
};

export default useTheme;
