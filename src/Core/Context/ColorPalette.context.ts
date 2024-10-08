import { createContext } from "react";
import { TColorPalette } from "../../Data/Types/TColorPalette";
import defaultColorPalette from "../../Data/Constants/DefaultColorPalette";

export type ColorPaletteContextType = {
    palette: TColorPalette,
    setColors: (colors: TColorPalette) => void,
};

const ColorPalleteContext = createContext<ColorPaletteContextType>({
    palette: defaultColorPalette,
    setColors: () => { }
});

export { ColorPalleteContext };