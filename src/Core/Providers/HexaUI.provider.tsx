import { TColorPalette } from "../../Data/Types/TColorPalette";
import defaultColorPalette from "../../UI/Themes/DefaultColorPalettes";
import defaultGradientPalette from "../../UI/Themes/DefaultGradients";
import ThemeProvider from "../Context/ThemeContext/providers/Theme.provider";
import ToastProvider from "../Context/ToastContext/providers/Toast.provider";

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
