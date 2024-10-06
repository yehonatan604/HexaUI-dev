import { TComponent } from "../../../../Data/Types/TComponent";

export type HrProps = TComponent<"hr"> & {
    borderColor?: string;
    borderWidth?: string;
    borderHeight?: string;
};