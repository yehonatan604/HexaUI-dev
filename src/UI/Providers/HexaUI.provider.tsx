import { TColorPalette } from "../../Data/Types/TColorPalette";
import ColorPaletteProvider from "./ColorPalette.Provider.tsx";
import ThemeProvider from "./Theme.provider";

export type HexaUIProps = {
  children: React.ReactNode;
  palette?: TColorPalette;
};

const HexaUI = ({ children, palette }: HexaUIProps) => {
  return (
    <ThemeProvider>
      <ColorPaletteProvider pallete={palette}>{children}</ColorPaletteProvider>
    </ThemeProvider>
  );
};

export default HexaUI;
