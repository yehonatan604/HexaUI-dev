import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import RainbowBorder from "../Common/Border/RainbowBorder/Component";
import Flex from "../Layout/Flex/Component";

const RainbowBordersExample = () => {
  // Hooks
  const { mode, colors } = useTheme();

  // Options
  const bgColor = mode === "light" ? colors.whiteLight : colors.standradDark;
  const textColor = mode === "light" ? "text-zinc-900" : "text-zinc-100";

  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto my-10 gap-4 w-3/4"
    >
      <RainbowBorder options={{ thickness: 1, gradient: colors.failure }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 1, gradient: colors.primary }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 1.5, gradient: colors.secondary }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>{" "}
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 2, gradient: colors.standrad }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 2.5, gradient: colors.info }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>{" "}
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 3, gradient: colors.select }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 3.5, gradient: colors.cancel }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 4, gradient: colors.approve }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: 4.5, gradient: colors.success }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder
        options={{
          thickness: 5,
          gradient: colors.warning,
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
