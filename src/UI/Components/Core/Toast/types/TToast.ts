import { TComponent } from "../../../../../Data/Types/TComponent";
import { TToastOptions } from "./TToastOptions";

export type TToast = TComponent<"div"> & {
    options?: TToastOptions;
    onFinished?: () => void;
    top?: number;
    isVisible?: boolean;
}