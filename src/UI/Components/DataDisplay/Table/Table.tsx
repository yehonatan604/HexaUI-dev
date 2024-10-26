import React from "react";
import { TTable } from "./types/TTable";

const Table = (props: TTable) => {
  const { options, rowsArr, className, ...componentProps } = props;

  // Base options with defaults
  const borderVariant = options?.borderVariant || "gray-700";
  const headerBgColor = options?.headerBgColor || "gray-800";
  const headerTextColor = options?.headerTextColor || "white";
  const rowBgColor = options?.rowBgColor || "gray-900";
  const rowTextColor = options?.rowTextColor || "gray-100";
  const rowHoverBgColor = options?.rowHoverBgColor || "gray-700";
  const rowHoverTextColor = options?.rowHoverTextColor || "white";
  const stripedBgColor = options?.stripedBgColor || "gray-800/50";
  const stripedTextColor = options?.stripedTextColor || "gray-100";
  const padding = options?.padding || "4";
  const isStriped = options?.striped ?? true;

  // Border options
  const borderWidth = options?.border?.thickness || "border";
  const borderRadius = options?.border?.radius || "rounded-xl";

  return (
    <div className={`relative w-full ${className}`} {...componentProps}>
      <div
        className={`w-full bg-${rowBgColor} text-${rowTextColor} ${borderWidth} ${borderRadius} shadow-xl overflow-hidden border-${borderVariant}`}
      >
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="table w-full">
              {rowsArr.map((row, rowIndex) => {
                const isHeader = rowIndex === 0;
                const isStripedRow = isStriped && rowIndex % 2 === 1;

                let baseClassName = `
                  table-row
                  border-b border-${borderVariant}
                  last:border-0
                `;

                // Add header-specific classes
                if (isHeader) {
                  baseClassName += ` bg-${headerBgColor} text-${headerTextColor} font-semibold`;
                } else {
                  // Add body row classes
                  if (isStriped) {
                    baseClassName += isStripedRow
                      ? ` bg-${stripedBgColor} text-${stripedTextColor}`
                      : ` bg-${rowBgColor} text-${rowTextColor}`;
                  } else {
                    baseClassName += ` bg-${rowBgColor} text-${rowTextColor}`;
                  }

                  // Add hover classes for non-header rows
                  baseClassName += ` hover:bg-${rowHoverBgColor} hover:text-${rowHoverTextColor} transition-colors duration-150`;
                }

                return (
                  <div role="row" key={rowIndex} className={baseClassName}>
                    {React.Children.map(row, (cell, cellIndex) => {
                      const isLastCell = cellIndex === React.Children.count(row) - 1;

                      return (
                        <div
                          key={cellIndex}
                          className={`
                            table-cell p-${padding} whitespace-normal break-words
                            ${!isLastCell ? `border-r border-${borderVariant}` : ""}
                            ${isHeader ? "uppercase tracking-wider text-xs font-bold" : "text-sm sm:text-base"}
                          `}
                        >
                          <div className="max-w-[250px] sm:max-w-none">{cell}</div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
