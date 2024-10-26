import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TTableOptions = TComponentOptions & {
    borderVariant?: string;
    headerBgColor?: string;
    headerTextColor?: string;
    rowBgColor?: string;
    rowTextColor?: string;
    rowHoverBgColor?: string;
    rowHoverTextColor?: string;
    striped: boolean;
    stripedBgColor?: string;
    stripedTextColor?: string;
    padding?: string;
}
