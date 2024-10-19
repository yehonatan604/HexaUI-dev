import { GiAlliedStar } from "react-icons/gi";
import useTheme from "../../../../../Core/Context/ThemeContext/hooks/useTheme";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../../Data/Constants/FlexWrap";
import RainbowBorder from "../RainbowBorder";
import Flex from "../../../Layout/Flex/Flex";

const RainbowBordersExample = () => {
  // Hooks
  const { mode, colors, gradients } = useTheme();

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
      <RainbowBorder options={{ thickness: "xxs", gradient: gradients.failure }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: "xs", gradient: gradients.primary }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: "sm", gradient: gradients.secondary }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: "md", gradient: gradients.standrad }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: "lg", gradient: gradients.info }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: "xl", gradient: gradients.select }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder options={{ thickness: "2xl", gradient: gradients.cancel }}>
        <div className={`p-5 rounded ${bgColor} ${textColor}`}>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
          <p className="text-center">Hello</p>
        </div>
      </RainbowBorder>
      <RainbowBorder
        options={{
          thickness: "3xl",
          gradient: gradients.primary,
          rounded: "full",
          innerBgVariant: colors.successDark,
          innerTextVariant: colors.white,
        }}
      >
        <div className={`rounded-full ${textColor}`}>
          <GiAlliedStar size={100} />
        </div>
      </RainbowBorder>
    </Flex>
  );
};

export default RainbowBordersExample;
