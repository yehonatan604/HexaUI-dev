import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import Flex from "../Layout/Flex/Component";
import AutoGrid from "../Layout/Grid/Component";

const GridExample = () => {
  const mode = useTheme().mode;
  const textColor = mode === "light" ? "text-zinc-800" : "text-zinc-300";

  return (
    <Flex
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      wrap={FlexWrap.Wrap}
      className="m-auto mb-5 gap-4 w-3/5 text-2xl"
    >
      <AutoGrid
        cols={3}
        showBorder
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
        className={`${textColor}`}
      />
    </Flex>
  );
};

export default GridExample;
