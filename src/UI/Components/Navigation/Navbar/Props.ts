import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type NavbarProps = TComponent<"div"> & {
    variant?: string;
    colors?: {
        lightColor?: string;
        darkColor?: string;
    };
};