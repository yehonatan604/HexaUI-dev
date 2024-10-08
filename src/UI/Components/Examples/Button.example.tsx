import useColorPalette from "../../../Core/Hooks/useColorPallete";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { Sizes } from "../../../Data/Constants/Sizes";
import Button from "../Common/Button/Component";
import Flex from "../Layout/Flex/Component";

const ButtonExamples = () => {
  const { Sm, Md, Lg, Xl } = Sizes;
  const { palette: pallete } = useColorPalette();

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
          bgVariant: pallete.success,
          textVariant: pallete.info,
        }}
      >
        submit
      </Button>

      <Button
        options={{
          size: Lg,
          bgVariant: pallete.failure,
          textVariant: pallete.approveDark,
        }}
      >
        submit
      </Button>

      <Button
        options={{
          size: Xl,
          bgVariant: pallete.warning,
          textVariant: pallete.select,
        }}
      >
        submit
      </Button>

      <Button
        options={{
          size: Md,
          bgVariant: pallete.primary,
          textVariant: pallete.standradDark,
        }}
      >
        submit
      </Button>
    </Flex>
  );
};

export default ButtonExamples;
