import useTheme from "../../../Core/Hooks/useTheme";
import defaultGradientPalette from "../../../Data/Constants/DefaultGradientPalette";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
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
      <RainbowBorder options={{ thickness: 1, gradient: defaultGradientPalette.failure }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 1, gradient: defaultGradientPalette.primary }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder
        options={{ thickness: 1.5, gradient: defaultGradientPalette.secondary }}
      >
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>{" "}
        </div>
      </RainbowBorder>
      <RainbowBorder
        options={{ thickness: 2, gradient: defaultGradientPalette.standrad }}
      >
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 2.5, gradient: defaultGradientPalette.info }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>{" "}
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 3, gradient: defaultGradientPalette.select }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder
        options={{ thickness: 3.5, gradient: defaultGradientPalette.cancel }}
      >
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 4, gradient: defaultGradientPalette.approve }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder
        options={{ thickness: 4.5, gradient: defaultGradientPalette.success }}
      >
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder
        options={{
          thickness: 5,
          gradient: defaultGradientPalette.warning,
        }}
      >
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
    </Flex>
  );
};

export default RainbowBordersExample;
