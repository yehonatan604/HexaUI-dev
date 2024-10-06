import { TComponent } from "../../../../Data/Types/TComponent";

export type ThemeTogglerProps = TComponent<"button"> & {
    darkIcon?: React.ReactNode;
    lightIcon?: React.ReactNode;
};