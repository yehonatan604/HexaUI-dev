import defaultColorPalette from "../../../Data/Constants/DefaultColorPalette";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { Sizes } from "../../../Data/Constants/Sizes";
import RingBorder from "../Common/Border/RingBorder/Component";
import Flex from "../Layout/Flex/Component";

const RingExamples = () => {
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto mb-10 gap-4 gap-y-1 w-3/5"
    >
      <RingBorder className="m-auto mt-10">
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder
        options={{
          ringVariant: defaultColorPalette.success,
        }}
        className="m-auto mt-10"
      >
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder
        options={{
          ringVariant: defaultColorPalette.primary,
          borderVariant: defaultColorPalette.blackLight,
        }}
        className="m-auto mt-10"
      >
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder
        options={{
          ringVariant: defaultColorPalette.warning,
          borderVariant: defaultColorPalette.select,
          shadow: {
            color: defaultColorPalette.standrad,
            size: Sizes.Xl,
          },
        }}
        className="m-auto mt-10"
      >
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder
        options={{
          ringVariant: defaultColorPalette.cancel,
          borderVariant: defaultColorPalette.standradDark,
          shadow: {
            color: defaultColorPalette.standrad,
            size: Sizes.Lg,
          },
          padding: 1,
        }}
        className="m-auto mt-10"
      >
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </RingBorder>
      <RingBorder
        options={{
          ringVariant: defaultColorPalette.blackDark,
          borderVariant: defaultColorPalette.approve,
          shadow: {
            color: defaultColorPalette.selectLight,
            size: Sizes.Lg,
          },
          textVariant: defaultColorPalette.standrad,
          padding: 4,
        }}
        className="m-auto"
      >
        Very Important Content
      </RingBorder>
      <RingBorder
        options={{
          ringVariant: defaultColorPalette.cancel,
          borderVariant: defaultColorPalette.approve,
          bgVariant: "lime-500",
          shadow: {
            color: defaultColorPalette.successLight,
            size: Sizes.Lg,
          },
          textVariant: defaultColorPalette.standrad,
          padding: 4,
          rounded: "full",
        }}
        className="m-auto"
      />
    </Flex>
  );
};

export default RingExamples;
