import { TComponentOptions } from "../../../../../Data/Types/TComponent";

export type TToastOptions = TComponentOptions & {
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    icon?: JSX.Element;
    type?: 'success' | 'info' | 'warning' | 'failure';
    title?: string;
    titleVariant?: string;
}