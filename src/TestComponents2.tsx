//import useTheme from "./Core/Hooks/useTheme";
import { FlexTypes } from "./Data/Constants/FlexTypes";
import DocPanel from "./UI/Components/Layout/DocPanel/DocPanel";
import Flex from "./UI/Components/Layout/Flex/Component";
import Scrollbar from "./UI/Components/Layout/Scrollbar/Scrollbar";

const TestComponents2 = () => {
  return (
    <Scrollbar maxHeight="fit">
      <div className="h-[83vh]">
        <Flex
          options={{
            justify: FlexTypes.Center,
            align: FlexTypes.Start,
          }}
          className={`min-h-screen bg-standard-l dark:bg-black dark:text-primary-l text-primary-d pb-5`}
        >
          <DocPanel
            options={{
              posiotion: "fixed",
              placement: "left",
              border: {
                variant: "secondary",
              },
            }}
            className="h-[83vh] w-[20vw] bg-standard-l dark:bg-black dark:text-primary-l text-primary-d"
          ></DocPanel>
        </Flex>
      </div>
    </Scrollbar>
  );
};

export default TestComponents2;
