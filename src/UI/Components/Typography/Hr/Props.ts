import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type HrProps = TComponent<"hr"> & {
    borderColor?: string;
    borderWidth?: string;
    borderHeight?: string;
};