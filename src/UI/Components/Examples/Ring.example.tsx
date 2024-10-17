import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { Sizes } from "../../../Data/Constants/Sizes";
import Ring from "../Common/Ring/Component";
import Flex from "../Layout/Flex/Component";

const RingExamples = () => {
  // Hooks
  const { colors } = useTheme();

  // JSX
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto mb-10 gap-4 gap-y-1 w-3/5"
    >
      <Ring className="m-auto mt-10">
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </Ring>
      <Ring
        options={{
          ringVariant: colors.success,
        }}
        className="m-auto mt-10"
      >
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </Ring>
      <Ring
        options={{
          ringVariant: colors.primary,
          borderVariant: colors.blackLight,
        }}
        className="m-auto mt-10"
      >
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </Ring>
      <Ring
        options={{
          ringVariant: colors.warning,
          borderVariant: colors.select,
          shadow: {
            color: colors.standrad,
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
      </Ring>
      <Ring
        options={{
          ringVariant: colors.cancel,
          borderVariant: colors.standradDark,
          shadow: {
            color: colors.standrad,
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
      </Ring>
      <Ring
        options={{
          ringVariant: colors.blackDark,
          borderVariant: colors.approve,
          shadow: {
            color: colors.selectLight,
            size: Sizes.Lg,
          },
          textVariant: colors.standrad,
          padding: 4,
        }}
        className="m-auto"
      >
        Very Important Content
      </Ring>
      <Ring
        options={{
          ringVariant: colors.cancel,
          borderVariant: colors.approve,
          bgVariant: "lime-500",
          shadow: {
            color: colors.successLight,
            size: Sizes.Lg,
          },
          textVariant: colors.standrad,
          padding: 4,
          rounded: "full",
        }}
        className="m-auto"
      />
    </Flex>
  );
};

export default RingExamples;
