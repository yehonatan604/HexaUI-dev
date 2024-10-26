import React from "react";
import { TDataGrid } from "./types/TDataGrid";
import Flex from "../../Layout/Flex/Flex";
import DataGridHeader from "./components/DataGridHeader";
import useDataGrid from "./hooks/useDataGrid";
import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";

const DataGrid = (props: TDataGrid) => {
  const { rowsArr, options, className, style } = props;
  const { mode } = useTheme();

  // Hook to handle sorting, filtering and searching
  const {
    sortConfig,
    filterConfig,
    setFilterConfig,
    searchTerm,
    setSearchTerm,
    setSortConfig,
    filteredAndSortedRows,
  } = useDataGrid(rowsArr);

  // Extract header row from rows array
  const headerRow = rowsArr[0];

  // Options
  const headerControls = options?.headerControls || "all";
  const borderColor = options?.borderVariant || mode === "dark" ? "white-d" : "gray-400";
  const rowBgColor = options?.rowBgColor || mode === "dark" ? "zinc-800" : "white";
  const rowTextColor = options?.rowTextColor || mode === "dark" ? "white-d" : "black-l";
  const rowHoverBgColor =
    options?.rowHoverBgColor || mode === "dark" ? "zinc-600" : "gray-50";
  const rowHoverTextColor =
    options?.rowHoverTextColor || mode === "dark" ? "white-d" : "black-l";

  // JSX
  return (
    <div
      className={`
        w-full 
        rounded-t-lg 
        shadow-sm 
        border border-${borderColor} 
        ${className}
      `}
      style={style}
    >
      <div className="divide-y divide-gray-200">
        {/* Header Section */}
        <Flex
          options={{
            direction: "col",
            justify: "between",
            align: "center",
          }}
          className={`rounded-t-lg`}
        >
          <DataGridHeader
            headerRow={headerRow}
            sortConfig={sortConfig}
            setSortConfig={setSortConfig}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterConfig={filterConfig}
            setFilterConfig={setFilterConfig}
            headerControls={headerControls}
            options={options}
            borderColor={borderColor}
          />
        </Flex>

        {/* Data Rows */}
        {filteredAndSortedRows.length > 0 ? (
          filteredAndSortedRows.map((row, rowIndex) => (
            <Flex
              center
              key={rowIndex}
              role="row"
              className={`data-grid-row text-${rowTextColor} bg-${rowBgColor} hover:bg-${rowHoverBgColor} hover:text-${rowHoverTextColor} transition-colors duration-700`}
            >
              {/* Row Number */}
              <div className={`w-10 min-w-10 ring-1 ring-${borderColor} p-2 text-lg`}>
                {rowIndex + 1}
              </div>
              {/* Row Data */}
              {React.Children.map(row.data, (cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`flex-1 ring-1 ring-${borderColor} p-2 text-lg`}
                >
                  {cell}
                </div>
              ))}
            </Flex>
          ))
        ) : (
          <div className={`p-8 text-center text-${rowTextColor}`}>
            No matching results found
          </div>
        )}
      </div>
    </div>
  );
};

export default DataGrid;
