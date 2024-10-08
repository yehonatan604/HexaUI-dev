import defaultColorPalette from "../Themes/DefaultColorPalettes";
import defaultGradientPalette from "../Themes/DefaultGradients";
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
