import { ColorPalleteContext } from "../../Core/Context/ColorPalette.context";
import defaultColorPalette from "../../Data/Constants/DefaultColorPalette";
import { useState } from "react";
import { TColorPalette } from "../../Data/Types/TColorPalette";

export type ThemeProviderProps = {
  children: React.ReactNode;
  pallete?: TColorPalette;
};

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, pallete = defaultColorPalette } = props;
  const [palette, setColorPallete] = useState(pallete);

  const setColors = (colors: TColorPalette) => {
    const newColors = {};
    for (const key in palette) {
      if (colors[key]) {
        newColors[key] = colors[key];
      }
    }
    setColorPallete(newColors as TColorPalette);
  };

  return (
    <ColorPalleteContext.Provider
      value={{
        palette,
        setColors,
      }}
    >
      {children}
    </ColorPalleteContext.Provider>
  );
};

export default ThemeProvider;
