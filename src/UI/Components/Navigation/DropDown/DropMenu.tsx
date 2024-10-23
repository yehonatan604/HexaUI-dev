import { useState } from "react";
import { BiChevronUp } from "react-icons/bi";
import Flex from "../../Layout/Flex/Flex";
import { TDropMenu } from "./types/TDropMenu";

const DropMenu = ({
  options,
  title,
  type = "vertical",
  className,
  innerClassName,
  titleDivClassName,
  children,
  ...componentProps
}: TDropMenu) => {
  const [isContentOpen, setIsContentOpen] = useState(false);

  const bgColor = options?.bgVariant || "black-l";
  const textColor = options?.textVariant || "zinc-100";
  const titleSize = options?.titleSize || "xl";
  const titleColor = options?.titleVariant || "black-l";
  const gap = options?.gap || "gap-2";
  const titleDivGap = options?.titleDivGap || "gap-2";
  const width = options?.width || "full";

  const getPositionClasses = () => {
    if (type === "horizontal") {
      return "left-full top-0 ml-4 m-2";
    }
    return "top-full left-0 mt-1";
  };

  const getChevronRotation = () => {
    if (type === "horizontal") {
      return isContentOpen ? "-rotate-90" : "rotate-90";
    }
    return isContentOpen ? "rotate-0" : "rotate-180";
  };

  return (
    <Flex options={{ direction: "col" }} className={`relative ${className}`}>
      <Flex
        center
        options={{ justify: "between" }}
        className={`${titleDivGap} cursor-pointer ${titleDivClassName}`}
        onClick={() => setIsContentOpen(!isContentOpen)}
      >
        <h3 className={`text-${titleSize} text-${titleColor}`}>{title}</h3>
        <div className={`text-${titleColor}`}>
          <BiChevronUp
            size={20}
            className={`transform transition-transform duration-300 ${getChevronRotation()}`}
          />
        </div>
      </Flex>
      <Flex
        options={{ direction: "col" }}
        className={`absolute ${gap} w-${width} border border-black-l z-50 bg-${bgColor} text-${textColor} ${getPositionClasses()} p-2 ${innerClassName}
          transition-all duration-700 ease-in-out
          ${isContentOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        `}
        {...componentProps}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default DropMenu;
