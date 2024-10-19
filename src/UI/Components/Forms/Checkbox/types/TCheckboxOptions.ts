import { TComponentOptions } from "../../../../../Data/Types/TComponent";
import { TRingProps } from "../../../../../Data/Types/TRingProps";

export type TCheckboxOptions = TComponentOptions & {
    showBgColor?: boolean;
    ring?: TRingProps;
}
