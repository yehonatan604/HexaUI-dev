import { useContext } from "react";
import { ColorPalleteContext } from "../Context/ColorPalette.context";

const useColorPalette = () => {
    const context = useContext(ColorPalleteContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return {
        palette: context.palette,
        addColor: context.setColors,
    }
};
export default useColorPalette;