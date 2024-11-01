import "../../../../../main.css";
import Toast from "../Toast";
import { FlexWrap } from "../../../../../Data/Constants/FlexWrap";
import Flex from "../../../Layout/Flex/Flex";
import Button from "../../Button/Button";
import { toast } from "../helpers/toast";
import HexaUI from "../../../../../Core/Providers/HexaUI.provider";

export default {
  title: "Components/Core/Toast",
  component: Toast,
};

export const Default = () => (
  <HexaUI>
    <Flex
      options={{
        wrap: FlexWrap.Wrap,
        align: "end",
        justify: "center",
      }}
      className="h-96 gap-4"
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
  </HexaUI>
);
