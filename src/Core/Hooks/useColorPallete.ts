import { useContext } from "react";
import { ColorPalleteContext } from "../Context/ColorPalette.context";

const useColorPalette = () => {
    const context = useContext(ColorPalleteContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return {
        colors: context.colors,
        addColor: context.addColor,
        removeColor: context.removeColor,
        updateColor: context.updateColor,
        getColor: context.getColor
    }
};
export default useColorPalette;