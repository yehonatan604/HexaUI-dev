import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";
import { THeaderControls } from "./THeaderControls";

export type TDataGridOptions = TComponentOptions & {
    borderVariant?: string;
    headerControls?: THeaderControls;
    headerBgColor?: string;
    headerTextColor?: string;
    rowBgColor?: string;
    rowTextColor?: string;
    rowHoverBgColor?: string;
    rowHoverTextColor?: string;
    striped: boolean;
    stripedBgColor?: string;
    stripedTextColor?: string;
}
