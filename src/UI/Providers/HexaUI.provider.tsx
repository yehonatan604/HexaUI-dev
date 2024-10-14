import defaultColorPalette from "../Themes/DefaultColorPalettes";
import defaultGradientPalette from "../Themes/DefaultGradients";
import { TColorPalette } from "../../Data/Types/TColorPalette";
import ThemeProvider from "./Theme.provider";
import ToastProvider from "./Toast.provider";

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
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
};

export default HexaUI;
