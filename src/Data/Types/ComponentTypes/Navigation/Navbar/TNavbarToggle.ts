import { TComponent } from "../../TComponent";

export type TNavbarToggle = TComponent<"button"> & {
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
};