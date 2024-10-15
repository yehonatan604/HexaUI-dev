import { cloneElement, useState } from "react";
import generateRandomId from "../../Core/Helpers/IdHelper";
import Toast from "../Components/Common/Toast/Toast";
import {
  AlertStackItem,
  ToastStackContext,
} from "../../Core/Context/ToasttStack.context";

const ToastProvider = ({ children }) => {
  const [toastStack, setToastStack] = useState<AlertStackItem[]>([]);

  const addAlert = (id: string, alert: JSX.Element) => {
    setToastStack((prevAlerts) => [
      ...prevAlerts,
      {
        id,
        alert,
        isVisible: true,
      },
    ]);
  };

  const getTop = () => {
    let newTop = 0;
    Array.from(document.getElementById("alert-container")?.children || []).forEach(
      (child) => {
        newTop += child.clientHeight + 3;
      }
    );
    return newTop;
  };

  const alert = {
    info: (message: string) => {
      const id = generateRandomId();
      addAlert(
        id,
        <Toast
          top={getTop()} // Set initial top position based on stack length
          options={{ title: "Info" }}
          onFinished={() => {
            removeAlert(id);
          }}
        >
          {message}
        </Toast>
      );
    },
    success: (message: string) => {
      const id = generateRandomId();
      addAlert(
        id,
        <Toast
          top={getTop()} // Set initial top position based on stack length
          options={{ title: "Success", type: "success" }}
          onFinished={() => {
            removeAlert(id);
          }}
        >
          {message}
        </Toast>
      );
    },
    error: (message: string) => {
      const id = generateRandomId();
      addAlert(
        id,
        <Toast
          top={getTop()} // Set initial top position based on stack length
          options={{ title: "Error", type: "failure" }}
          onFinished={() => {
            removeAlert(id);
          }}
        >
          {message}
        </Toast>
      );
    },
    warning: (message: string) => {
      const id = generateRandomId();
      addAlert(
        id,
        <Toast
          top={getTop()} // Set initial top position based on stack length
          options={{ title: "Warning", type: "warning" }}
          onFinished={() => {
            removeAlert(id);
          }}
        >
          {message}
        </Toast>
      );
    },
  };

  const removeAlert = (id: string) => {
    // Set visibility to false to trigger the exit animation
    setToastStack((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === id
          ? { ...alert, isVisible: false } // Set visibility to false before removing
          : alert
      )
    );

    // Remove the alert after the animation is done
    setToastStack((prevAlerts) => {
      const updatedAlerts = prevAlerts.filter((alert) => alert.id !== id);
      let newTop = 0;
      return updatedAlerts.map((alert) => {
        const updatedAlert = cloneElement(alert.alert, { top: newTop });
        newTop += updatedAlert.props.children.clientHeight + 3;
        return {
          ...alert,
          alert: updatedAlert,
        };
      });
    });
  };

  return (
    <ToastStackContext.Provider
      value={{ alerts: toastStack, addAlert, removeAlert, toast: alert }}
    >
      {children}
      <div id="alert-container">
        {toastStack.length > 0 &&
          toastStack.map((alert) => (
            <div id={`toast-${alert.id}`} key={alert.id}>
              {alert.alert}
            </div>
          ))}
      </div>
    </ToastStackContext.Provider>
  );
};

export default ToastProvider;
