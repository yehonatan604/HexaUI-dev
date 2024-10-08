import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { Sizes } from "../../../Data/Constants/Sizes";
import Button from "../Common/Button/Component";
import Flex from "../Layout/Flex/Component";

const ButtonExamples = () => {
  const { Sm, Lg, Xl } = Sizes;
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
          textVariant: colors.black,
        }}
      >
        submit
      </Button>

      <Button
        options={{
          size: Lg,
          bgVariant: colors.failure,
          textVariant: colors.warning,
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

      <Button>submit</Button>
    </Flex>
  );
};

export default ButtonExamples;
