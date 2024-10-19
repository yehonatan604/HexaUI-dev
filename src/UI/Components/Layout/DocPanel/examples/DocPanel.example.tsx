import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import Flex from "../../Flex/Flex";
import DocPanel from "../DocPanel";

const DocPanelExamples = () => {
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Start,
      }}
      className={`min-h-screen bg-standard-l dark:bg-black dark:text-primary-l text-primary-d pb-5`}
    >
      <DocPanel
        options={{
          position: "fixed",
          placement: "left",
          border: {
            variant: "secondary",
          },
        }}
        className="h-[83vh] w-[20vw] bg-standard-l dark:bg-black dark:text-primary-l text-primary-d"
      ></DocPanel>
    </Flex>
  );
};

export default DocPanelExamples;
