import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import Flex from "../../Layout/Flex/Component";
import { TAccordion } from "../../../../Data/Types/ComponentTypes/Common/Accordion/TAccordion";
import useColorPalette from "../../../../Core/Hooks/useColorPallete";

const Accordion = (props: TAccordion) => {
  const { options, children, ...componentProps } = props;
  const [isContentOpen, setIsContentOpen] = useState(false);
  const { palette: pallete } = useColorPalette();

  const bgColor = options.bgVariant || "transparent";
  const textColor = options?.textVariant || "gray-800";
  const borderColor = options.border?.variant || "gray-300";
  const borderRadius = options.border?.radius || "md";
  const border = options.border?.show
    ? `border-2 border-${borderColor} rounded-${borderRadius}`
    : "";
  const titleColor = options.titleVariant || pallete.secondaryLight;

  console.log(border);

  return (
    <Flex direction={FlexDir.Col} className={`w-full ${border} p-4 gap-4`}>
      <Flex
        justify={FlexTypes.SpaceBetween}
        align={FlexTypes.Center}
        className={`gap-4 ${bgColor} cursor-pointer w-full`}
        {...componentProps}
        onClick={() => setIsContentOpen(!isContentOpen)}
      >
        <h1 className={`text-xl text-${titleColor}`}>{options.title}</h1>
        <div className={`${textColor}`}>
          {isContentOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </Flex>
      {isContentOpen && <div className={`text-${textColor}`}>{children}</div>}
    </Flex>
  );
};

export default Accordion;
