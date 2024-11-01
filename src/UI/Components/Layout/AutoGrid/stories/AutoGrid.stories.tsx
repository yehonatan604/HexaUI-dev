import "../../../../../main.css";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import AutoGrid from "../AutoGrid";
import Flex from "../../Flex/Flex";

export default {
  title: "Components/Layout/AutoGrid",
  component: AutoGrid,
  ...defaultStory,
};

export const AutoGridExample = () => {
  return (
    <Flex center className="gap-4 h-96">
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
