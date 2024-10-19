import { useState, useRef, useEffect, useCallback } from "react";
import * as colorHelper from "../../../../Core/Helpers/Color.helper";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import Flex from "../../Layout/Flex/Flex";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";
import Saturation from "./Stauration";
import Alpha from "./Alpha";
import Hue from "./Hue";
import ColorDisplay from "./ColorDisplay";
import { THsvColor } from "../../../../Data/Types/THsvColor";

const ColorPicker = () => {
  const [color, setColor] = useState<THsvColor>({ h: 0, s: 100, v: 100, a: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingCursor, setIsDraggingCursor] = useState(false);
  const [isDraggingAlpha, setIsDraggingAlpha] = useState(false);
  const [colorType, setColorType] = useState("hsv");
  const [pipeta, setPipeta] = useState(false);
  const sliderRef = useRef(null);
  const canvasRef = useRef(null);
  const alphaRef = useRef(null);
  const thumbRef = useRef(null);

  const rgb = colorHelper.hsvToRgb(color.h, color.s, color.v);
  const hexColor = colorHelper.rgbToHex(rgb.r, rgb.g, rgb.b);

  // Handle hue slider interactions
  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateHue(e);
  };

  const updateHue = useCallback((e: MouseEvent) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const hue = Math.round((x / rect.width) * 360);

    setColor((prev: THsvColor) => ({ ...prev, h: hue }));
  }, []);

  // Handle alpha slider interactions
  const handleAlphaMouseDown = (e) => {
    setIsDraggingAlpha(true);
    updateAlpha(e);
  };

  const updateAlpha = useCallback((e: MouseEvent) => {
    if (!alphaRef.current) return;

    const rect = alphaRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const alpha = Math.round((x / rect.width) * 100);

    setColor((prev: THsvColor) => ({ ...prev, a: alpha }));
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        updateHue(e);
      }
      if (isDraggingAlpha) {
        updateAlpha(e);
      }
    },
    [isDragging, isDraggingAlpha, updateHue, updateAlpha]
  );

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDraggingCursor(true);
    updateSaturationValue(e);
  };

  const handleCanvasMouseMove = useCallback(
    (e: unknown) => {
      if (isDraggingCursor) {
        updateSaturationValue(e);
      }
    },
    [isDraggingCursor]
  );

  const updateSaturationValue = (e) => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));

    const saturation = Math.round((x / rect.width) * 100);
    const value = Math.round(100 - (y / rect.height) * 100);

    setColor((prev) => ({ ...prev, s: saturation, v: value }));
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      setIsDraggingCursor(false);
      setIsDraggingAlpha(false);
    };

    const handleGlobalMouseMove = (e) => {
      handleMouseMove(e);
      handleCanvasMouseMove(e);
    };

    document.addEventListener("mouseup", handleGlobalMouseUp);
    document.addEventListener("mousemove", handleGlobalMouseMove);

    const handleClick = (e: MouseEvent) => {
      if (pipeta) {
        // make the cursor a crosshair
        document.body.style.cursor = "crosshair";

        // Get the target element
        const target = e.target as HTMLElement;

        // Function to find the nearest element with a non-transparent background color
        const getBackgroundColor = (el: HTMLElement): string => {
          const color = window.getComputedStyle(el).backgroundColor;
          if (color !== "rgba(0, 0, 0, 0)" && color !== "transparent") {
            return color;
          }
          // Traverse up the DOM tree if the color is transparent
          if (el.parentElement) {
            return getBackgroundColor(el.parentElement);
          }
          return "rgba(0, 0, 0, 0)"; // default value if no background color found
        };

        const color = getBackgroundColor(target);
        if (color !== "rgba(0, 0, 0, 0)" && color !== "transparent") {
          const [r, g, b] = color.match(/\d+/g).map(Number);
          const hsv = colorHelper.rgbToHsv(r, g, b);
          setColor((prev) => ({ ...hsv, a: prev.a }));
          //   setPipeta(false);
        }
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, [handleCanvasMouseMove, handleMouseMove, pipeta]);

  return (
    <div className="p-4 space-y-4 ring-2 ring-standard border text-black-l dark:text-white border-standard-l rounded-lg w-[320px] dark:bg-black-d bg-standard">
      <Saturation
        color={color}
        canvasRef={canvasRef}
        handleCanvasMouseDown={handleCanvasMouseDown}
      />

      <Alpha
        color={color}
        alphaRef={alphaRef}
        handleAlphaMouseDown={handleAlphaMouseDown}
        hexColor={hexColor}
      />
      <Hue
        sliderRef={sliderRef}
        thumbRef={thumbRef}
        color={color}
        handleMouseDown={handleMouseDown}
      />
      <ColorDisplay
        color={color}
        hexColor={hexColor}
        pipeta={pipeta}
        setColorType={setColorType}
        setPipeta={setPipeta}
      />

      {colorType === "hsv" && (
        <Flex
          options={{
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
          }}
          className="gap-2"
        >
          {["h", "s", "v", "a"].map((key) => (
            <Flex
              options={{
                justify: FlexTypes.Center,
                align: FlexTypes.Center,
              }}
              className="gap-2"
              key={key}
            >
              <Label htmlFor={key} text={`${key.toUpperCase()}:`} />
              <TextInput
                options={{
                  bgVariant: "black-d",
                }}
                key={key}
                id={key}
                type="number"
                value={color[key]}
                onChange={(e) =>
                  setColor((prev) => ({ ...prev, [key]: +e.target.value }))
                }
                min={key === "h" ? 0 : 0}
                max={key === "h" ? 360 : 100}
                style={{
                  fontSize: ".8rem",
                  width: "3rem",
                  height: "1.5rem",
                }}
              />
            </Flex>
          ))}
        </Flex>
      )}

      {colorType === "rgb" && (
        <Flex
          options={{
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
          }}
          className="gap-2"
        >
          {["r", "g", "b", "a"].map((key) => (
            <>
              <Label htmlFor={key} text={`${key.toUpperCase()}:`} />
              <TextInput
                options={{
                  bgVariant: "black-d",
                }}
                key={key}
                id={key}
                type="number"
                value={key === "a" ? color.a : rgb[key]}
                onChange={(e) => {
                  if (key === "a") {
                    setColor((prev) => ({ ...prev, a: +e.target.value }));
                  } else {
                    const newRgb = { ...rgb, [key]: +e.target.value };
                    const newHsv = colorHelper.rgbToHsv(newRgb.r, newRgb.g, newRgb.b);
                    setColor((prev) => ({ ...newHsv, a: prev.a } as THsvColor));
                  }
                }}
                min={0}
                max={key === "a" ? 100 : 255}
                style={{
                  fontSize: ".8rem",
                  width: "3rem",
                  height: "1.5rem",
                }}
              />
            </>
          ))}
        </Flex>
      )}

      {colorType === "hex" && (
        <Flex
          className="gap-2"
          options={{
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
          }}
        >
          <Label htmlFor="hex" text="HEX:" />
          <TextInput
            options={{
              bgVariant: "black-d",
            }}
            type="text"
            id="hex"
            value={hexColor}
            onChange={(e) => {
              const hex = e.target.value;
              const newRgb = colorHelper.hexToRgb(hex);
              const newHsv = colorHelper.rgbToHsv(newRgb.r, newRgb.g, newRgb.b);
              setColor((prev) => ({ ...newHsv, a: prev.a }));
            }}
            style={{
              fontSize: ".8rem",
              width: "11.5rem",
              height: "1.5rem",
            }}
          />
          <Label htmlFor="alpha" text="A:" />
          <TextInput
            options={{
              bgVariant: "black-d",
            }}
            type="number"
            id="alpha"
            value={color.a}
            onChange={(e) => setColor((prev) => ({ ...prev, a: +e.target.value }))}
            min={0}
            max={100}
            style={{
              fontSize: ".8rem",
              width: "3rem",
              height: "1.5rem",
            }}
          />
        </Flex>
      )}
    </div>
  );
};

export default ColorPicker;
