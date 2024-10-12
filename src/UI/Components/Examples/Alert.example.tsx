import { useState } from "react";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import Alert from "../Common/Alert/Alert";
import Flex from "../Layout/Flex/Component";
import Button from "../Common/Button/Component";

const AlertExamples = () => {
  const [showTestAlert, setShowTestAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);

  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto py-5 gap-4"
    >
      <Button onClick={() => setShowTestAlert(true)}>Defult/Info Alert</Button>
      <Alert
        show={showTestAlert}
        setShow={setShowTestAlert}
        options={{ title: "Test Alert" }}
      >
        This is a Test. This is a Test. This is a Test. This is a Test. This is a Test.
      </Alert>

      <Button
        options={{
          bgVariant: "success",
        }}
        onClick={() => setShowSuccessAlert(true)}
      >
        Succes Alert
      </Button>
      <Alert
        show={showSuccessAlert}
        setShow={setShowSuccessAlert}
        options={{ title: "Test Alert", type: "success" }}
      >
        Operation Successful!
      </Alert>

      <Button
        options={{
          bgVariant: "failure",
        }}
        onClick={() => setShowFailureAlert(true)}
      >
        Failure Alert
      </Button>
      <Alert
        show={showFailureAlert}
        setShow={setShowFailureAlert}
        options={{ title: "Test Alert", type: "failure" }}
      >
        Operation Failed!
      </Alert>

      <Button
        options={{
          bgVariant: "warning",
        }}
        onClick={() => setShowWarningAlert(true)}
      >
        Warning Alert
      </Button>
      <Alert
        show={showWarningAlert}
        setShow={setShowWarningAlert}
        options={{ title: "Test Alert", type: "warning" }}
      >
        Warning!
      </Alert>
    </Flex>
  );
};

export default AlertExamples;
