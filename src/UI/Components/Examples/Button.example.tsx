import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { Sizes } from "../../../Data/Constants/Sizes";
import Button from "../Common/Button/Component";
import Flex from "../Layout/Flex/Component";

const ButtonExamples = () => {
  const { Sm, Md, Lg, Xl } = Sizes;
  const { colors } = useTheme();

  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto py-5 gap-4"
    >
      <Button
        options={{
          size: Sm,
          bgVariant: colors.success,
          textVariant: colors.info,
        }}
      >
        submit
      </Button>

      <Button
        options={{
          size: Lg,
          bgVariant: colors.failure,
          textVariant: colors.approveDark,
        }}
      >
        submit
      </Button>

      <Button
        options={{
          size: Xl,
          bgVariant: colors.warning,
          textVariant: colors.select,
        }}
      >
        submit
      </Button>

      <Button
        options={{
          size: Md,
          bgVariant: colors.primary,
          textVariant: colors.standradDark,
        }}
      >
        submit
      </Button>
    </Flex>
  );
};

export default ButtonExamples;
