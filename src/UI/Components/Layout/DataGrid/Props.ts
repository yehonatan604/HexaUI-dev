import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type DataGridProps = TComponent<"div"> & {
    rowsArr: React.ReactNode[];
    cols: number;
    showBorder?: boolean;
};