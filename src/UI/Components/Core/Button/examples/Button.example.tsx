import useTheme from "../../../../../Core/Context/ThemeContext/hooks/useTheme";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../../Data/Constants/FlexWrap";
import { Sizes } from "../../../../../Data/Constants/Sizes";
import Flex from "../../../Layout/Flex/Flex";
import Button from "../Button";

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
          bgVariant: colors.successDark,
          textVariant: colors.white,
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
      <Flex className="gap-4">
        <Button options={{ bgVariant: "success" }}>Ok</Button>
        <Button options={{ bgVariant: "failure" }}>Cancel</Button>
      </Flex>
    </Flex>
  );
};

export default ButtonExamples;
