import { TDataGrid } from "./TDataGrid";
import { TFilterOperator } from "./TFilterOperator";
import { THeaderControls } from "./THeaderControls";

export type TDataGridHeader = {
    headerRow: React.ReactNode;
    sortConfig: { key: number; direction: "asc" | "desc" | null };
    filterConfig: {
        column: number;
        operator: TFilterOperator;
        value: string;
    };
    setFilterConfig: React.Dispatch<
        React.SetStateAction<{
            column: number;
            operator: TFilterOperator;
            value: string;
        }>
    >;
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setSortConfig: React.Dispatch<
        React.SetStateAction<{
            key: number;
            direction: "asc" | "desc" | null;
        }>
    >;
    headerControls: THeaderControls;
    options: TDataGrid["options"];
    borderColor: string;
};