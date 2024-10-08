import { TComponent } from "../../../../../Data/Types/ComponentTypes/TComponent";

export type NavbarToggleProps = TComponent<"button"> & {
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
};