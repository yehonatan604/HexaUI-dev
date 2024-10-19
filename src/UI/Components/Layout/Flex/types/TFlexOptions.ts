import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TFlexOptions = TComponentOptions & {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
}
