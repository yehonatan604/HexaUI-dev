import { TComponent } from "../../../../../Data/Types/TComponent";

export type TThemeToggler = TComponent<"button"> & {
    darkIcon?: React.ReactNode;
    lightIcon?: React.ReactNode;
};
