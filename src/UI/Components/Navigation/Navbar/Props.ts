import { TComponent } from "../../../../Data/Types/TComponent";

export type NavbarProps = TComponent<"div"> & {
    variant?: string;
    colors?: {
        lightColor?: string;
        darkColor?: string;
    };
};