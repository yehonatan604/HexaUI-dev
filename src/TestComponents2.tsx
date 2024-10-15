//import useTheme from "./Core/Hooks/useTheme";
import { FlexTypes } from "./Data/Constants/FlexTypes";
import DocPanel from "./UI/Components/Layout/DocPanel/DocPanel";
import Flex from "./UI/Components/Layout/Flex/Component";
import Scrollbar from "./UI/Components/Layout/Scrollbar/Scrollbar";
import List from "./UI/Components/Typography/List/Component";

const TestComponents2 = () => {
  //const { colors } = useTheme();

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
          >
            <List
              options={{
                textVariant: "primary",
                listStyle: "none",
                justify: "start",
                align: "start",
                fontSize: "lg",
                gap: 4,
                items: [
                  <p className="p-1">
                    Item 1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                    repudiandae soluta, dolore voluptatem
                  </p>,
                  <p className="p-1">Item 2</p>,
                  <p className="p-1">Item 3</p>,
                  <p className="p-1">Item 4</p>,
                  <p className="p-1">Item 5</p>,
                  <p className="p-1">Item 6</p>,
                  <p className="p-1">Item 7</p>,
                  <p className="p-1">Item 8</p>,
                  <p className="p-1">Item 9</p>,
                  <p className="p-1">Item 10</p>,
                ],
              }}
              className="overflow-hidden turncate"
            />
          </DocPanel>
        </Flex>
      </div>
    </Scrollbar>
  );
};

export default TestComponents2;
