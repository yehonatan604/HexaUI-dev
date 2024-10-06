import { createContext } from "react";
import { TColor } from "../../Data/Types/TColor";

export type ColorPaletteContextType = {
    colors: TColor[],
    addColor: (color: TColor) => void,
    removeColor: (color: TColor) => void,
    updateColor: (color: TColor) => void,
    setColors: (colors: TColor[]) => void,
    getColor: (name: string) => TColor | undefined,
};

const ColorPalleteContext = createContext<ColorPaletteContextType>({
    colors: [],
    addColor: () => { },
    removeColor: () => { },
    updateColor: () => { },
    getColor: () => undefined,
    setColors: () => { }
});

export { ColorPalleteContext };