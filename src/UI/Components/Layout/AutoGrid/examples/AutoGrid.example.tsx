import useTheme from "../../../../../Core/Context/ThemeContext/hooks/useTheme";
import { FlexDir } from "../../../../../Data/Constants/FlexDirection";
import Title from "../../../Typography/Title/Title";
import Flex from "../../Flex/Flex";
import AutoGrid from "../AutoGrid";

const AutoGridExample = () => {
  // Hooks
  const { colors } = useTheme();

  // JSX
  return (
    <Flex
      center
      options={{ direction: FlexDir.Col }}
      className="m-auto mb-5 gap-4 w-3/5 text-2xl"
    >
      <Title options={{ size: "xl", textVariant: colors.secondary }}>Auto Grid</Title>
      <AutoGrid
        cols={3}
        rowsArr={[
          <p className="p-2">item 1</p>,
          <p className="p-2">item 2</p>,
          <p className="p-2">item 3</p>,
          <p className="p-2">item 4</p>,
          <p className="p-2">item 5</p>,
          <p className="p-2">item 6</p>,
          <p className="p-2">item 7</p>,
          <p className="p-2">item 8</p>,
          <p className="p-2">item 9</p>,
        ]}
        className={`dark:text-info-l text-info-d text-sm`}
      />
    </Flex>
  );
};

export default AutoGridExample;
