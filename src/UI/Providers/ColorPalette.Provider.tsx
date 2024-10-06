import { ColorPalleteContext } from "../../Core/Context/ColorPalette.context";
import defaultColorPalette from "../..//Data/Constants/DefaultColorPalette";
import { TColor } from "../../Data/Types/TColor";
import { useState } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorPallete, setColorPallete] = useState(defaultColorPalette);

  const addColor = (color: TColor) => {
    setColorPallete((prev) => [...prev, color]);
  };

  const removeColor = (color: TColor) => {
    setColorPallete((prev) => prev.filter((c) => c.name !== color.name));
  };

  const updateColor = (color: TColor) => {
    setColorPallete((prev) => prev.map((c) => (c.name === color.name ? color : c)));
  };

  const getColor = (name: string) => {
    return colorPallete.find((c) => c.name === name);
  };

  const setColors = (colors: TColor[]) => {
    setColorPallete(colors);
  };

  return (
    <ColorPalleteContext.Provider
      value={{
        colors: colorPallete,
        addColor,
        removeColor,
        updateColor,
        getColor,
        setColors,
      }}
    >
      {children}
    </ColorPalleteContext.Provider>
  );
};

export default ThemeProvider;
