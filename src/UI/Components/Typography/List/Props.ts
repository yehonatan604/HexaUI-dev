import { TComponent } from "../../../..//Data/Types/TComponent";
import { TTitle } from "../../../../Data/Types/TTitle";


export type ListProps = TComponent<"ol"> & {
    items: React.ReactElement[] | string[];
    listStyle?: string;
    fontSize?: string;
    dir?: "ltr" | "rtl";
    flexDirection?: string;
    justify?: string;
    align?: string;
    gap?: string;
    variant?: string;
    icons?: React.ReactElement[];
    byOrder?: boolean;
    listTitle?: TTitle;
};