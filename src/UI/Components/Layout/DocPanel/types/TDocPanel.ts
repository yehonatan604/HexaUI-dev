import { TComponent } from "../../../../../Data/Types/TComponent";
import { TDocPanelOptions } from "./TDocPanelOptions";

export type TDocPanel = TComponent<"div"> & {
    options: TDocPanelOptions;
    panelWidth?: string;
    innerClassName?: string;
}
