import { TComponentOptions } from "../../../../../Data/Types/TComponentOptions";

export type TListOptions = TComponentOptions & {
    items: React.ReactElement[] | string[];
    icons?: React.ReactElement[];
    listStyle?: string;
    fontSize?: string;
    flexDirection?: string;
    justify?: string;
    align?: string;
    gap?: number;
    byOrder?: boolean;
}
