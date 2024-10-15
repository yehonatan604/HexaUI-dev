import { TComponent, ComponentOptions } from "../../TComponent";

export type TDocPanel = TComponent<"div"> & {
    options: DocPanelOptions;
    panelWidth?: string;
    innerClassName?: string;
}

export type DocPanelOptions = ComponentOptions & {
    posiotion?: 'relative' | 'absolute' | 'fixed' | 'sticky';
    placement: 'top' | 'right' | 'bottom' | 'left';
}