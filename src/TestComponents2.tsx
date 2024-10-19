//import useTheme from "./Core/Hooks/useTheme";
import DocPanelExamples from "./UI/Components/Layout/DocPanel/examples/DocPanel.example";
import ScrollArea from "./UI/Components/Layout/ScrollArea/ScrollArea";

const TestComponents2 = () => {
  return (
    <ScrollArea maxHeight="fit">
      <div className="h-[83vh]">
        <DocPanelExamples />
      </div>
    </ScrollArea>
  );
};

export default TestComponents2;
