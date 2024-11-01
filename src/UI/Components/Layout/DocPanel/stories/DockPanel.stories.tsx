import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import "../../../../../main.css";
import Flex from "../../Flex/Flex";
import DocPanel from "../DocPanel";

export default {
  title: "Components/Layout/DockPanel",
  component: DocPanel,
  ...defaultStory,
};

export const DocPanelExamples = () => {
  return (
    <Flex center className="h-96">
      <Flex
        options={{
          justify: FlexTypes.Center,
          align: FlexTypes.Center,
        }}
        className="m-auto gap-4 w-3/5 bg-standard text-2xl"
      >
        <DocPanel
          options={{
            placement: "left",
            border: {
              variant: "primary-d",
              thickness: "0.5",
            },
          }}
          panelWidth="100px"
          className="border-r-2"
          innerClassName="text-white-d"
        >
          <p className="p-2">item 1</p>
          <p className="p-2">item 2</p>
          <p className="p-2">item 3</p>
        </DocPanel>
      </Flex>
    </Flex>
  );
};
