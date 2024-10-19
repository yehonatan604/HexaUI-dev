import React, { useEffect, useRef, useState, useCallback } from "react";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { TDocPanel } from "./types/TDocPanel";
import Flex from "../Flex/Flex";

const DocPanel = ({
  options,
  className = "",
  innerClassName = "",
  panelWidth: initialWidth,
  children,
  ...componentProps
}: TDocPanel) => {
  const [panelWidth, setPanelWidth] = useState(initialWidth || "20%");
  const panelRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const direction = (() => {
    switch (options.placement) {
      case "top":
        return FlexDir.Col;
      case "bottom":
        return FlexDir.ColReverse;
      case "left":
        return FlexDir.Row;
      default:
        return FlexDir.RowReverse;
    }
  })();

  const isHorizontal = direction === FlexDir.Row || direction === FlexDir.RowReverse;

  const handleResize = useCallback(
    (e: MouseEvent) => {
      if (!isDraggingRef.current || !panelRef.current) return;

      const rect = panelRef.current.getBoundingClientRect();
      let newSize;

      if (isHorizontal) {
        newSize =
          direction === FlexDir.Row ? e.clientX - rect.left : rect.right - e.clientX;
      } else {
        newSize =
          direction === FlexDir.Col ? e.clientY - rect.top : rect.bottom - e.clientY;
      }

      // Ensure the new size is within reasonable bounds
      newSize = Math.max(
        100,
        Math.min(
          newSize,
          isHorizontal ? window.innerWidth - 100 : window.innerHeight - 100
        )
      );

      if (isHorizontal) setPanelWidth(`${newSize}px`);
    },
    [direction, isHorizontal]
  );

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", handleMouseUp);
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  }, [handleResize]);

  const handleMouseDown = useCallback(() => {
    isDraggingRef.current = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", handleMouseUp);
    document.body.style.userSelect = "none";
    document.body.style.cursor = isHorizontal ? "ew-resize" : "ns-resize";
  }, [handleResize, handleMouseUp, isHorizontal]);

  useEffect(() => {
    const border = borderRef.current;
    if (border) {
      border.addEventListener("mousedown", handleMouseDown);
    }
    return () => {
      if (border) {
        border.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, [handleMouseDown]);

  return (
    <Flex
      options={{
        direction: direction,
        align: "t",
      }}
      className={`relative ${className} w-full`}
    >
      <div
        ref={panelRef}
        className={`flex flex-col bg-${
          options.bgVariant || "black-d"
        } ${innerClassName} text-nowrap text-ellipsis overflow-hidden`}
        {...componentProps}
        style={{
          [isHorizontal ? "width" : "height"]: panelWidth,
        }}
      >
        {children}
      </div>
      <div
        ref={borderRef}
        className={`bg-${options.border?.variant || "black-d"} ${
          isHorizontal
            ? `w-${options.border?.thickness || 1} cursor-ew-resize`
            : `h-${options.border?.thickness || 1} cursor-ns-resize`
        }`}
        style={{ flexShrink: 0 }}
      />
    </Flex>
  );
};

export default DocPanel;
