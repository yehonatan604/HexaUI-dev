import { createContext } from "react";
import { TColorPalette } from "../../Data/Types/TColorPalette";
import defaultColorPalette from "../../UI/Themes/DefaultColorPalettes";
import defaultGradientPalette from "../../UI/Themes/DefaultGradients";

export type ThemeContextType = {
  mode: string;
  toggleTheme: () => void;
  colors: TColorPalette,
  gradients: TColorPalette,
  setColors: (colors: TColorPalette) => void,
  setGradients: (gradients: TColorPalette) => void
};

const ThemeContext = createContext<ThemeContextType>({
  mode: localStorage.getItem("theme-mode") || "light",
  toggleTheme: () => { },
  colors: defaultColorPalette,
  gradients: defaultGradientPalette,
  setColors: () => { },
  setGradients: () => { }
});

export { ThemeContext };
