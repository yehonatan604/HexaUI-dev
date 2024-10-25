import React, { useState, useMemo } from "react";
import { TDataGrid } from "./types/TDataGrid";
import { TSortConfig } from "./types/TSortConfig";
import { TSortDirection } from "./types/TSortDirection";
import Flex from "../Flex/Flex";
import { FaArrowDown, FaArrowsUpDown, FaArrowUp } from "react-icons/fa6";
import TextInput from "../../Forms/TextInput/TextInput";

const DataGrid = (props: TDataGrid) => {
  const { rowsArr, options, title, className, style } = props;
  const [sortConfig, setSortConfig] = useState<TSortConfig>({
    key: -1,
    direction: null,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const headerRow = rowsArr[0];
  const dataRows = rowsArr.slice(1);

  // Add original indices to data rows
  const indexedDataRows = useMemo(() => {
    return dataRows.map((row) => ({
      data: row,
    }));
  }, [dataRows]);

  // Filter and sort the data rows
  const filteredAndSortedRows = useMemo(() => {
    // First filter
    let filteredRows = indexedDataRows;
    if (searchTerm) {
      filteredRows = indexedDataRows.filter((row) => {
        return React.Children.toArray(row.data).some((cell) => {
          const cellText = React.isValidElement(cell)
            ? (cell.props.children?.toString() || "").toLowerCase()
            : String(cell).toLowerCase();
          return cellText.includes(searchTerm.toLowerCase());
        });
      });
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
  }, [indexedDataRows, sortConfig, searchTerm]);

  const handleSort = (columnIndex: number) => {
    setSortConfig((prevSort) => {
      if (prevSort.key === columnIndex) {
        const nextDirection: TSortDirection =
          prevSort.direction === null
            ? "asc"
            : prevSort.direction === "asc"
              ? "desc"
              : null;
        return { key: columnIndex, direction: nextDirection };
      }
      return { key: columnIndex, direction: "asc" };
    });
  };

  const renderSortIcon = (columnIndex: number) => {
    if (sortConfig.key !== columnIndex) {
      return <FaArrowsUpDown className="w-4 h-4 ml-2" />;
    }
    if (sortConfig.direction === "asc") {
      return <FaArrowUp className="w-4 h-4 ml-2" />;
    }
    if (sortConfig.direction === "desc") {
      return <FaArrowDown className="w-4 h-4 ml-2" />;
    }
    return <FaArrowsUpDown className="w-4 h-4 ml-2" />;
  };

  return (
    <div
      className={`
        w-full 
        bg-white 
        rounded-lg 
        shadow-sm 
        ${options?.borderVariant || "border"} 
        ${className || ""}
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
          className="dark:text-white-d dark:bg-black rounded-t-lg"
        >
          {/* Search Input */}
          <Flex
            options={{
              direction: "row",
              justify: "between",
              align: "center",
            }}
            className="bg-gray-100 dark:bg-black-d p-2 rounded-t-lg w-full"
          >
            <h3 className="text-xl">{title}</h3>
            <TextInput
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              searchIcon
            />
          </Flex>
          {/* Column Headers */}
          <Flex className="w-full">
            {/* Row Number Header */}
            <Flex
              className="ring-1 ring-white-d w-10 min-w-10 p-3 pl-2 cursor-pointer"
              onClick={() => handleSort(-1)}
            >
              #
            </Flex>
            {/* Other Headers */}
            {React.Children.map(headerRow, (cell, index) => (
              <Flex
                key={index}
                className="p-2 ring-1 ring-white-d w-full cursor-pointer"
                onClick={() => handleSort(index)}
              >
                <Flex
                  options={{
                    justify: "between",
                    align: "center",
                  }}
                  className="w-full text-xl"
                >
                  {cell}
                  {renderSortIcon(index)}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>

        {/* Data Rows */}
        {filteredAndSortedRows.length > 0 ? (
          filteredAndSortedRows.map((row, rowIndex) => (
            <Flex
              center
              key={rowIndex}
              className={`data-grid-row dark:text-white-d dark:bg-black-l hover:bg-gray-50 dark:hover:bg-black transition-colors duration-700  
              `}
            >
              {/* Row Number */}
              <div className="w-10 min-w-10 text-gray-500 dark:text-gray-400 font-medium ring-1 ring-white-d p-2">
                {rowIndex + 1}
              </div>
              {/* Row Data */}
              {React.Children.map(row.data, (cell, cellIndex) => (
                <div key={cellIndex} className="flex-1 ring-1 ring-white-d p-2">
                  {cell}
                </div>
              ))}
            </Flex>
          ))
        ) : (
          <div className="p-8 text-center dark:text-white-d dark:bg-black-l rounded-b-lg">
            No matching results found
          </div>
        )}
      </div>
    </div>
  );
};

export default DataGrid;
