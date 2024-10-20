import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import Flex from "../../Layout/Flex/Flex";
import { TAccordion } from "./types/TAccordion";
import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";

const Accordion = (props: TAccordion) => {
  const { options, children, ...componentProps } = props;
  const [isContentOpen, setIsContentOpen] = useState(false);
  const { colors } = useTheme();

  const bgColor = options.bgVariant || "transparent";
  const textColor = options?.textVariant || "gray-800";
  const borderColor = options.border?.variant || "gray-300";
  const borderRadius = options.border?.radius || "md";
  const border = options.border
    ? `border-2 border-${borderColor} rounded-${borderRadius}`
    : "";
  const titleColor = options.titleVariant || colors.secondaryLight;

  return (
    <Flex
      options={{
        direction: FlexDir.Col,
      }}
      className={`w-full ${border} p-4 gap-4`}
    >
      <Flex
        options={{
          justify: FlexTypes.SpaceBetween,
          align: FlexTypes.Center,
        }}
        className={`gap-4 ${bgColor} cursor-pointer w-full`}
        {...componentProps}
        onClick={() => setIsContentOpen(!isContentOpen)}
      >
        <h1 className={`text-xl text-${titleColor}`}>{options.title}</h1>
        <div className={`text-${textColor}`}>
          {isContentOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </Flex>
      {isContentOpen && <div className={`text-${textColor}`}>{children}</div>}
    </Flex>
  );
};

export default Accordion;
