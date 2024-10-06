import { useEffect, useState } from "react";
import Picker from "react-best-gradient-color-picker";
import { BsX } from "react-icons/bs";
import { ColorPickerProps } from "./Props";
import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import Flex from "../../Layout/Flex/Component";
import Label from "../Label/Component";

const ColorPicker = (props: ColorPickerProps) => {
  const { label, ...componentProps } = props;

  // Hooks
  const [color, setColor] = useState("rgba(255,255,255,1)");
  const [showPicker, setShowPicker] = useState(false);
  const mode = useTheme().mode;

  // Constants
  const borderColor = mode === "light" ? "border-zinc-500" : "border-zinc-200";

  // Functions
  const handleColorChange = (color: string) => {
    setColor(color);
  };

  // Effects
  useEffect(() => {
    // Close the color picker when clicked outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("div>canvas") || target.closest("div.picker-container")) return;
      else setShowPicker(false);
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // JSX
  return (
    <Flex
      direction={FlexDir.Col}
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      className="gap-1"
      {...componentProps}
    >
      {label && <Label text={label} htmlFor="color" />}
      <div
        className={`rounded-full border ${borderColor} size-7 cursor-pointer`}
        style={{ backgroundColor: color }}
        onClick={() => setShowPicker(!showPicker)}
      />
      {showPicker && (
        <Flex
          direction={FlexDir.Col}
          align={FlexTypes.End}
          className="picker-container fixed z-50 top-32 left-50 bg-[#1f2020] p-5 pt-10 rounded-lg"
        >
          <BsX
            className="cursor-pointer text-slate-200 absolute top-2 right-2 hover:text-slate-400"
            size={30}
            onClick={() => setShowPicker(!showPicker)}
          />
          <Picker value={color} onChange={handleColorChange} hideColorTypeBtns />
        </Flex>
      )}
    </Flex>
  );
};

export default ColorPicker;
