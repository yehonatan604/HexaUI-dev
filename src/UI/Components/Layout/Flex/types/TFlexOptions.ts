import { TComponentOptions } from "../../../../../Data/Types/TComponent";

export type TFlexOptions = TComponentOptions & {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
}
