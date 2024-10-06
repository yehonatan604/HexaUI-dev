import { TComponent } from "../../../../Data/Types/TComponent";

export type ButtonProps = TComponent<"button"> & {
    variant?: string;
    size?: string;
    rounded?: boolean;
    roundedS?: boolean;
    roundedE?: boolean;
};