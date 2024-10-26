import { FlexDir } from "../../../../../Data/Constants/FlexDirection";
import Flex from "../../Flex/Flex";
import Block from "../Block";

const BlockExamples = () => {
  // JSX
  return (
    <Flex
      center
      options={{ direction: FlexDir.Col }}
      className="m-auto mb-5 gap-4 w-3/5 text-2xl"
    >
      <Block>
        <h1>Default Block</h1>
        <p>
          A block is a container that can be used to group elements together. It can be
          used to create a layout or to group elements that are related to each other.
        </p>
      </Block>

      <Block options={{ padding: "1", innerPadding: "1" }}>
        <h1>Block Padding 1, Inner Padding 1</h1>
        <p>
          A block is a container that can be used to group elements together. It can be
          used to create a layout or to group elements that are related to each other.
        </p>
      </Block>

      <Block
        inline
        options={{ innerPadding: "2", bgVariant: "success", textVariant: "red-800" }}
      >
        <h1>Block</h1>
        <p>Inline</p>
        <p>Inline</p>
        <p>Inline</p>
        <p>Inline</p>
      </Block>
    </Flex>
  );
};

export default BlockExamples;
