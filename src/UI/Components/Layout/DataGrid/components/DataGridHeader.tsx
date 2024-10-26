import React from "react";
import Select from "../../../Forms/Select/Select";
import TextInput from "../../../Forms/TextInput/TextInput";
import Flex from "../../Flex/Flex";
import { TFilterOperator } from "../types/TFilterOperator";
import { FaArrowsUpDown, FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { TSortDirection } from "../types/TSortDirection";
import { TDataGridHeader } from "../types/TDataGridHeader";
import useTheme from "../../../../../Core/Context/ThemeContext/hooks/useTheme";

const DataGridHeader = (props: TDataGridHeader) => {
  const {
    headerRow,
    sortConfig,
    filterConfig,
    setFilterConfig,
    searchTerm,
    setSearchTerm,
    setSortConfig,
    headerControls,
    options,
    borderColor,
  } = props;

  const { mode } = useTheme();

  const headerBgColor =
    options?.headerBgColor || mode === "dark" ? "stone-800" : "gray-100";
  const headerTextColor =
    options?.headerTextColor || mode === "dark" ? "white-d" : "black-l";

  const operators = [
    { value: "equals", label: "Equals" },
    { value: "contains", label: "Contains" },
    { value: "greater", label: "Greater Than" },
    { value: "less", label: "Less Than" },
    { value: "regex", label: "Regex" },
  ];

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
    <>
      <Flex
        options={{
          direction: "row",
          justify: "between",
          align: "center",
        }}
        className={`bg-${headerBgColor} text-${headerTextColor} p-2 rounded-t-lg w-full`}
      >
        {/* Filter Controls */}
        {(headerControls === "all" || headerControls.includes("filter")) && (
          <Flex
            options={{
              direction: "row",
              justify: "start",
              align: "center",
            }}
            className=" gap-2"
          >
            <h2 className="text-lg font-semibold">Filter:</h2>
            <Select
              value={filterConfig.column}
              role="combobox"
              onChange={(e) =>
                setFilterConfig((prev) => ({
                  ...prev,
                  column: Number(e.target.value),
                }))
              }
              items={React.Children.map(headerRow, (cell, index) => ({
                value: index.toString(),
                label: React.isValidElement(cell)
                  ? cell.props.children?.toString()
                  : String(cell),
              }))}
              options={{
                bgVariant: "transparent",
              }}
            />

            <Select
              value={filterConfig.operator}
              role="combobox"
              onChange={(e) =>
                setFilterConfig((prev) => ({
                  ...prev,
                  operator: e.target.value as TFilterOperator,
                }))
              }
              items={operators.map((op) => ({ value: op.value, label: op.label }))}
              options={{
                bgVariant: "transparent",
              }}
            />

            <TextInput
              type="text"
              placeholder="Filter value..."
              value={filterConfig.value}
              onChange={(e) =>
                setFilterConfig((prev) => ({ ...prev, value: e.target.value }))
              }
              className="w-32"
            />
          </Flex>
        )}

        {/* Search Control */}
        {(headerControls === "all" || headerControls.includes("search")) && (
          <TextInput
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            searchIcon
          />
        )}
      </Flex>

      {/* Column Headers */}
      <Flex className={`w-full bg-${headerBgColor}`}>
        {/* Row Number Header */}
        <Flex
          className={`ring-1 text-${headerTextColor} ring-${borderColor} w-10 min-w-10 px-2 cursor-pointer pb-1`}
          onClick={() => handleSort(-1)}
        >
          #
        </Flex>
        {(headerControls === "all" || headerControls.includes("colHeaders")) &&
          React.Children.map(headerRow, (cell, index) => (
            <Flex
              key={index}
              className={`px-2 py-1 ring-1 text-${headerTextColor} ring-${borderColor} w-full cursor-pointer`}
              onClick={() => handleSort(index)}
            >
              <Flex
                options={{
                  justify: "between",
                  align: "center",
                }}
                className="w-full text-lg"
              >
                {cell}
                {(headerControls === "all" || headerControls.includes("colHeaders")) &&
                  renderSortIcon(index)}
              </Flex>
            </Flex>
          ))}
      </Flex>
    </>
  );
};

export default DataGridHeader;
