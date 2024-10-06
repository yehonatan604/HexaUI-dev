import { TComponent } from "../../../../Data/Types/TComponent";

export type GridProps = TComponent<"div"> & {
    rowsArr: React.ReactNode[];
    cols: number;
    showBorder?: boolean;
};