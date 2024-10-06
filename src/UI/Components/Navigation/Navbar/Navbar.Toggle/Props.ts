import { TComponent } from "../../../../../Data/Types/TComponent";

export type NavbarToggleProps = TComponent<"button"> & {
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
};