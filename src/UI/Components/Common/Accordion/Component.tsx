import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AccordionProps } from "./Props";
import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { Variants } from "../../../../Data/Constants/Variants";
import Flex from "../../Layout/Flex/Component";

const Accordion = (props: AccordionProps) => {
  const { title, variant, children, ...componentProps } = props;
  const [isContentOpen, setIsContentOpen] = useState(false);
  const mode = useTheme().mode;

  const textColor = mode === "light" ? "text-gray-800" : "text-slate-200";

  const borderColor =
    variant === Variants.Standard
      ? "border-gray-300"
      : variant === Variants.Info
      ? "border-blue-300"
      : variant === Variants.Success
      ? "border-green-300"
      : variant === Variants.Warning
      ? "border-yellow-300"
      : variant === Variants.Failure
      ? "border-red-300"
      : variant === Variants.Lime
      ? "border-lime-300"
      : variant === Variants.Cyan
      ? "border-cyan-300"
      : variant === Variants.Purple
      ? "border-purple-300"
      : variant === Variants.Pink
      ? "border-pink-300"
      : "border-gray-300";
  return (
    <Flex
      direction={FlexDir.Col}
      className={`w-full border ${borderColor} rounded-md p-4 gap-4`}
    >
      <Flex
        justify={FlexTypes.SpaceBetween}
        align={FlexTypes.Center}
        className="gap-4 cursor-pointer w-full"
        {...componentProps}
        onClick={() => setIsContentOpen(!isContentOpen)}
      >
        <h1 className={`text-xl ${textColor}`}>{title}</h1>
        <div className={`${textColor}`}>
          {isContentOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </Flex>
      {isContentOpen && <div className={`${textColor}`}>{children}</div>}
    </Flex>
  );
};

export default Accordion;
