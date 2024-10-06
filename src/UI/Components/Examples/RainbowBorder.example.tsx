import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { Variants } from "../../../Data/Constants/Variants";
import RainbowBorder from "../Common/Border/RainbowBorder/Component";
import Flex from "../Layout/Flex/Component";

const RainbowBordersExample = () => {
  const mode = useTheme().mode;
  const bgColor = mode === "light" ? "bg-zinc-100" : "bg-zinc-900";
  const textColor = mode === "light" ? "text-zinc-900" : "text-zinc-100";

  return (
    <Flex
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      wrap={FlexWrap.Wrap}
      className="m-auto my-10 gap-4 w-3/4"
    >
      <RainbowBorder borderWidth={1}>
        <div className={`w-[70px] h-20 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder variant={Variants.Failure} borderWidth={1.5}>
        <div className={`w-[70px] h-20 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>{" "}
        </div>
      </RainbowBorder>
      <RainbowBorder variant={Variants.Success} borderWidth={2}>
        <div className={`w-[70px] h-20 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder variant={Variants.Warning} borderWidth={2.5}>
        <div className={`w-[70px] h-20 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>{" "}
        </div>
      </RainbowBorder>
      <RainbowBorder variant={Variants.Lime} borderWidth={3}>
        <div className={`w-[70px] h-20 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder variant={Variants.Cyan} borderWidth={3.5}>
        <div className={`w-[70px] h-20 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder variant={Variants.Purple} borderWidth={4}>
        <div className={`w-[70px] h-20 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder variant={Variants.Pink} borderWidth={4.5}>
        <div className={`w-[70px] h-20 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
    </Flex>
  );
};

export default RainbowBordersExample;
