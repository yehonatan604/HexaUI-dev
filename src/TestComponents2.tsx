//import useTheme from "./Core/Hooks/useTheme";
import DocPanelExamples from "./UI/Components/Layout/DocPanel/examples/DocPanel.example";
import Scrollbar from "./UI/Components/Layout/Scrollbar/Scrollbar";

const TestComponents2 = () => {
  return (
    <Scrollbar maxHeight="fit">
      <div className="h-[83vh]">
        <DocPanelExamples />
      </div>
    </Scrollbar>
  );
};

export default TestComponents2;
