import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type ThemeTogglerProps = TComponent<"button"> & {
    darkIcon?: React.ReactNode;
    lightIcon?: React.ReactNode;
};