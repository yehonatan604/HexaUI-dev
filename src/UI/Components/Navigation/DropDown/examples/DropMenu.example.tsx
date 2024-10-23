import { FlexDir } from "../../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import Flex from "../../../Layout/Flex/Flex";
import DropMenu from "../DropMenu";

const DropMenuExamples = () => {
  return (
    <Flex
      options={{
        direction: FlexDir.Col,
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="m-auto mb-5 gap-4 md:w-1/5 max-md:w-3/5"
    >
      <DropMenu
        title="DropMenu"
        options={{
          titleVariant: "cancel",
          textVariant: "success",
          bgVariant: "black",
          titleDivGap: "gap-4",
        }}
      >
        <p>item1</p>
        <p>item2</p>
        <DropMenu
          title="item 3"
          options={{
            titleSize: "md",
            titleVariant: "success",
            titleDivGap: "gap-4",
            textVariant: "success",
            bgVariant: "black",
            width: "28",
          }}
          type="horizontal"
        >
          <p>item1</p>
          <p>item2</p>
          <p>item3</p>
        </DropMenu>
        <p>item4</p>
      </DropMenu>
    </Flex>
  );
};

export default DropMenuExamples;
