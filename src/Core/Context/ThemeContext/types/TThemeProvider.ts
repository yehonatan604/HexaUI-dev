import { TColorPalette } from "../../../../Data/Types/TColorPalette";

export type TThemeProvider = {
    children: React.ReactNode;
    colorsPalette?: TColorPalette;
    gradientsPalette?: TColorPalette;
};
