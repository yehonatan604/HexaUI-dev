import { TColorPalette } from "../../../../Data/Types/TColorPalette";

export type TThemeContext = {
    mode: string;
    toggleTheme: () => void;
    colors: TColorPalette,
    gradients: TColorPalette,
    setColors: (colors: TColorPalette) => void,
    setGradients: (gradients: TColorPalette) => void
};
