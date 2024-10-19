import { TComponentOptions } from "../../../../../Data/Types/TComponent";

export type TRingOptions = TComponentOptions & {
    borderThickness?: number;
    ringThickness?: number;
    borderVariant?: string;
    ringVariant?: string;
    padding?: number;
    rounded?: string
}
