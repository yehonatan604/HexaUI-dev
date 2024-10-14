import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import Flex from "../Layout/Flex/Component";
import Button from "../Common/Button/Component";
import useToast from "../../../Core/Hooks/useToast";

const ToastExamples = () => {
  const { toast } = useToast();

  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto py-5 gap-4"
    >
      <Button onClick={() => toast.info("Some info")}>Defult/Info Alert</Button>
      <Button options={{ bgVariant: "success" }} onClick={() => toast.success("Success")}>
        Success Alert
      </Button>
      <Button options={{ bgVariant: "failure" }} onClick={() => toast.error("Error")}>
        Error Alert
      </Button>
      <Button
        options={{ bgVariant: "warning", textVariant: "info-d" }}
        onClick={() => toast.warning("Warning")}
      >
        Warning Alert
      </Button>
    </Flex>
  );
};

export default ToastExamples;
