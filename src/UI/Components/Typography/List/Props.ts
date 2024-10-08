import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";
import { TTitle } from "../../../../Data/Types/ComponentTypes/Typography/Title/TTitle";


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