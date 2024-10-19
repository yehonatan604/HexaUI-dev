import { TComponentOptions } from "../../../../../Data/Types/TComponent";

export type TDocPanelOptions = TComponentOptions & {
    position?: 'relative' | 'absolute' | 'fixed' | 'sticky';
    placement: 'top' | 'right' | 'bottom' | 'left';
}