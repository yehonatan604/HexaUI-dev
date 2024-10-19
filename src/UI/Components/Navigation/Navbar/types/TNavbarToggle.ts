import { TComponent } from "../../../../../Data/Types/TComponent";

export type TNavbarToggle = TComponent<"button"> & {
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
};
