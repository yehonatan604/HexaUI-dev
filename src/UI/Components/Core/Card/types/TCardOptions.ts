import { TComponentOptions } from "../../../../../Data/Types/TComponent";
import { TSize } from "../../../../../Data/Types/TSize";

export type TCardOptions = TComponentOptions & {
    padding?: string;
    rounded?: TSize | string;
    gap?: number;
};