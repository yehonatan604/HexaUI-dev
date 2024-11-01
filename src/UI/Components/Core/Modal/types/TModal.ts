import { TComponent } from "../../../../../Data/Types/TComponent";
import { TModalOptions } from "./TModalOptions";

export type TModal = TComponent<"div"> & {
    options?: TModalOptions;
    isOpen?: boolean;
    toggleModal?: () => void;
}
