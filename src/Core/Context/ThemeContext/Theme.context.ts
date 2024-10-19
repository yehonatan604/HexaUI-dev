import { createContext } from "react";
import defaultColorPalette from "../../../UI/Themes/DefaultColorPalettes";
import defaultGradientPalette from "../../../UI/Themes/DefaultGradients";
import { TThemeContext } from "./types/TThemeContext";

const ThemeContext = createContext<TThemeContext>({
  mode: localStorage.getItem("theme-mode") || "light",
  toggleTheme: () => { },
  colors: defaultColorPalette,
  gradients: defaultGradientPalette,
  setColors: () => { },
  setGradients: () => { }
});

export { ThemeContext };
