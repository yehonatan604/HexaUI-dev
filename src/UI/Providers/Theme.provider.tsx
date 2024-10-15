import { ThemeContext } from "../../Core/Context/Theme.context";
import { useState, useEffect } from "react";
import { TColorPalette } from "../../Data/Types/TColorPalette";

export type ThemeProviderProps = {
  children: React.ReactNode;
  colorsPalette?: TColorPalette;
  gradientsPalette?: TColorPalette;
};

const ThemeProvider = ({
  children,
  colorsPalette,
  gradientsPalette,
}: ThemeProviderProps) => {
  const [mode, setMode] = useState("light");
  const [colors, setColorsPallete] = useState(colorsPalette);
  const [gradients, setGradientsPallete] = useState(gradientsPalette);

  const toggleTheme = () => {
    setMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme-mode", mode === "light" ? "dark" : "light");
  };

  const setColors = (colors: TColorPalette) => {
    const newColors = {};
    for (const key in colors) {
      if (colors[key]) {
        newColors[key] = colors[key];
      }
    }
    setColorsPallete(newColors as TColorPalette);
  };

  const setGradients = (gradients: TColorPalette) => {
    const newGradients = {};
    for (const key in gradients) {
      if (gradients[key]) {
        newGradients[key] = gradients[key];
      }
    }
    setGradientsPallete(newGradients as TColorPalette);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme-mode");
    if (localTheme) {
      setMode(localTheme);
    }
    if (mode === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        colors,
        gradients,
        setColors,
        setGradients,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
