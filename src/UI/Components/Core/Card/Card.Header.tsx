import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { TComponent } from "../../../../Data/Types/TComponent";
import Flex from "../../Layout/Flex/Flex";

const CardHeader = (props: TComponent<"div">) => {
  const { children, options, ...componentProps } = props;

  // Hooks
  const { colors } = useTheme();

  //Options
  const textColor = options?.textVariant || colors.standradLight;

  return (
    <Flex
      options={{
        direction: FlexDir.Col,
      }}
      {...componentProps}
    >
      <h1 className={`text-2xl text-${textColor} font-bold py-2`}>{children}</h1>
    </Flex>
  );
};

export default CardHeader;
