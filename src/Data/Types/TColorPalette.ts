import { TGradientPalette } from "./TGradientPalette";

export type TColorPalette = TGradientPalette & {
    black?: string;
    white?: string;
    backgroundLight?: string;
    backgroundDark?: string;
    textLight?: string;
    textDark?: string;

    primaryLight?: string;
    secondaryLight?: string;
    standradLight?: string;
    infoLight?: string;
    selectLight?: string;
    cancelLight?: string;
    approveLight?: string;
    successLight?: string;
    warningLight?: string;
    failureLight?: string;
    blackLight?: string;
    whiteLight?: string;

    primaryDark?: string;
    secondaryDark?: string;
    standradDark?: string;
    infoDark?: string;
    selectDark?: string;
    cancelDark?: string;
    approveDark?: string;
    successDark?: string;
    warningDark?: string;
    failureDark?: string;
    blackDark?: string;
    whiteDark?: string;
}
