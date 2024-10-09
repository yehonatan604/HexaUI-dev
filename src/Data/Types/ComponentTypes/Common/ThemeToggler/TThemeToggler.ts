import { TComponent } from "../../TComponent";

export type TThemeToggler = TComponent<"button"> & {
    darkIcon?: React.ReactNode;
    lightIcon?: React.ReactNode;
};