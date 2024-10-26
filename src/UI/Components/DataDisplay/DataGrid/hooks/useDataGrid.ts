import React, { useState, useMemo } from "react";
import { TFilterConfig } from "../types/TFilterConfig";
import { TSortConfig } from "../types/TSortConfig";

const useDataGrid = (rowsArr: React.ReactNode[]) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState<TSortConfig>({
        key: -1,
        direction: null,
    });
    const [filterConfig, setFilterConfig] = useState<TFilterConfig>({
        column: 0,
        operator: "equals",
        value: "",
    });

    const dataRows = rowsArr.slice(1);

    // Add original indices to data rows
    const indexedDataRows = useMemo(() => {
        return dataRows.map((row) => ({
            data: row,
        }));
    }, [dataRows]);

    // Filter and sort the data rows
    const filteredAndSortedRows = useMemo(() => {
        const applyFilter = (row: { data: React.ReactNode[] }) => {
            const cellValue = React.Children.toArray(row.data)[filterConfig.column];
            const cellText = React.isValidElement(cellValue)
                ? (cellValue.props.children?.toString() || "").toLowerCase()
                : String(cellValue).toLowerCase();
            const filterValue = filterConfig.value.toLowerCase();

            switch (filterConfig.operator) {
                case "equals":
                    return cellText === filterValue;
                case "contains":
                    return cellText.includes(filterValue);
                case "greater":
                    return Number(cellText) > Number(filterValue);
                case "less":
                    return Number(cellText) < Number(filterValue);
                case "regex":
                    try {
                        const regex = new RegExp(filterConfig.value, "i");
                        return regex.test(cellText);
                    } catch {
                        return true;
                    }
                default:
                    return true;
            }
        };
        // First apply search filter
        let filteredRows = indexedDataRows;
        if (searchTerm) {
            filteredRows = filteredRows.filter((row) => {
                return React.Children.toArray(row.data).some((cell) => {
                    const cellText = React.isValidElement(cell)
                        ? (cell.props.children?.toString() || "").toLowerCase()
                        : String(cell).toLowerCase();
                    return cellText.includes(searchTerm.toLowerCase());
                });
            });
        }

        // Then apply column filter
        if (filterConfig.value) {
            filteredRows = filteredRows.filter(applyFilter);
        }

        // Then sort
        if (sortConfig.direction === null || sortConfig.key === -1) {
            return filteredRows;
        }

        return [...filteredRows].sort((a, b) => {
            const aValue = React.Children.toArray(a.data)[sortConfig.key];
            const bValue = React.Children.toArray(b.data)[sortConfig.key];

            const aText = React.isValidElement(aValue)
                ? aValue.props.children?.toString() || ""
                : String(aValue);
            const bText = React.isValidElement(bValue)
                ? bValue.props.children?.toString() || ""
                : String(bValue);

            const aNum = Number(aText);
            const bNum = Number(bText);

            if (!isNaN(aNum) && !isNaN(bNum)) {
                return sortConfig.direction === "asc" ? aNum - bNum : bNum - aNum;
            }

            return sortConfig.direction === "asc"
                ? aText.localeCompare(bText)
                : bText.localeCompare(aText);
        });
    }, [indexedDataRows, searchTerm, filterConfig, sortConfig]);

    return {
        filteredAndSortedRows,
        sortConfig,
        setSortConfig,
        searchTerm,
        setSearchTerm,
        filterConfig,
        setFilterConfig,
    };
};

export default useDataGrid;