import { useState, useEffect } from "react";
import { LuPipette } from "react-icons/lu";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import Flex from "../../Layout/Flex/Flex";
import { THsvColor } from "../../../../Data/Types/THsvColor";
import Select from "../Select/Select";
import { hexToRgb, rgbToHsv } from "../../../../Core/Helpers/Color.helper";

export type ColorDisplayProps = {
  color: THsvColor;
  hexColor: string;
  pipeta: boolean;
  setColorType: (type: string) => void;
  setPipeta: (pipeta: boolean) => void;
  setColor: (color: THsvColor) => void;
};

declare global {
  interface Window {
    EyeDropper?: {
      new (): {
        open: () => Promise<{ sRGBHex: string }>;
      };
    };
  }
}

const abortController = new AbortController();

const ColorDisplay = (props: ColorDisplayProps) => {
  const { color, setColor, hexColor, pipeta, setColorType, setPipeta } = props;
  const [previewColor, setPreviewColor] = useState<string>(hexColor);
  const [isPickerActive, setIsPickerActive] = useState(false);

  useEffect(() => {
    if (!pipeta) {
      setPreviewColor(hexColor);
      setIsPickerActive(false);
      return;
    }

    const startEyeDropper = async () => {
      if (!window.EyeDropper) {
        setPipeta(false);
        return;
      }

      try {
        setIsPickerActive(true);
        document.body.style.overflow = "hidden"; // Disable scroll during pipette usage
        const eyeDropper = new window.EyeDropper();
        const result = await eyeDropper.open();
        setPreviewColor(result.sRGBHex);
        const rgb = hexToRgb(result.sRGBHex);
        const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
        setColor({ ...hsv, a: color.a });
        // check what is focused
        console.log(document.activeElement);
      } catch {
        abortController.abort();
      } finally {
        setPipeta(false);
        setIsPickerActive(false);
        document.body.style.cursor = "default";
      }
    };
    if (pipeta && !isPickerActive) {
      startEyeDropper();
    }
  }, [pipeta, hexColor, setPipeta, isPickerActive, setColor, color]);

  return (
    <Flex
      options={{ justify: FlexTypes.SpaceEvenly, align: FlexTypes.Center }}
      className="gap-4"
    >
      <div
        className="w-16 h-8 rounded-lg border border-gray-200"
        style={{
          backgroundColor: previewColor,
          opacity: color.a / 100,
        }}
      />
      <LuPipette
        size={30}
        className={`cursor-pointer hover:text-blue-600 transition-colors ${
          isPickerActive ? "text-blue-500 animate-pulse" : "text-gray-700"
        }`}
        onClick={() => setPipeta(!pipeta)}
        onMouseDown={(e) => e.preventDefault()} // Prevent focus issues on click
      />
      <Flex className="gap-4">
        <Select
          items={[
            { value: "hsv", label: "hsv" },
            { value: "rgb", label: "rgb" },
            { value: "hex", label: "hex" },
          ]}
          onChange={(e) => setColorType(e.target.value)}
          options={{
            textVariant: "standard",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default ColorDisplay;
