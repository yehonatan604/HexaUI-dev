import defaultColorPalette from "../../Data/Constants/DefaultColorPalette";
import defaultGradientPalette from "../../Data/Constants/DefaultGradientPalette";
import { TColorPalette } from "../../Data/Types/TColorPalette";
import ThemeProvider from "./Theme.provider";

export type HexaUIProps = {
  children: React.ReactNode;
  colors?: TColorPalette;
  gradients?: TColorPalette;
};

const HexaUI = ({ children, colors, gradients }: HexaUIProps) => {
  return (
    <ThemeProvider
      colorsPalette={colors || defaultColorPalette}
      gradientsPalette={gradients || defaultGradientPalette}
    >
      {children}
    </ThemeProvider>
  );
};

export default HexaUI;
