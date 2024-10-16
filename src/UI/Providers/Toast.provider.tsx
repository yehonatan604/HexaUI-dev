import { cloneElement, useState, useEffect, useMemo } from "react";
import generateRandomId from "../../Core/Helpers/IdHelper";
import Toast from "../Components/Common/Toast/Toast";
import { setToastInstance } from "../../Core/Helpers/Toast/toast";
import { ToastStackContext } from "../../Core/Context/ToasttStack.context";
import { TToastStackItem } from "../../Core/Helpers/Toast/types/Toast.types";

const ToastProvider = ({ children }) => {
  const [toastStackItems, setToastStackItems] = useState<TToastStackItem[]>([]);

  const addToast = (id: string, toast: JSX.Element) => {
    setToastStackItems((prevToasts) => [
      ...prevToasts,
      {
        id,
        toast,
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

  const toast = useMemo(
    () => ({
      info: (message: string) => {
        const id = generateRandomId();
        addToast(
          id,
          <Toast
            top={getTop()}
            options={{ title: "Info" }}
            onFinished={() => {
              removeToast(id);
            }}
          >
            {message}
          </Toast>
        );
      },
      success: (message: string) => {
        const id = generateRandomId();
        addToast(
          id,
          <Toast
            top={getTop()}
            options={{ title: "Success", type: "success" }}
            onFinished={() => {
              removeToast(id);
            }}
          >
            {message}
          </Toast>
        );
      },
      error: (message: string) => {
        const id = generateRandomId();
        addToast(
          id,
          <Toast
            top={getTop()}
            options={{ title: "Error", type: "failure" }}
            onFinished={() => {
              removeToast(id);
            }}
          >
            {message}
          </Toast>
        );
      },
      warning: (message: string) => {
        const id = generateRandomId();
        addToast(
          id,
          <Toast
            top={getTop()}
            options={{ title: "Warning", type: "warning" }}
            onFinished={() => {
              removeToast(id);
            }}
          >
            {message}
          </Toast>
        );
      },
    }),
    []
  );

  const removeToast = (id: string) => {
    setToastStackItems((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === id ? { ...toast, isVisible: false } : toast
      )
    );

    setTimeout(() => {
      setToastStackItems((prevToasts) => {
        const updatedToasts = prevToasts.filter((toast) => toast.id !== id);
        let newTop = 0;
        return updatedToasts.map((alert) => {
          const updatedToast = cloneElement(alert.toast, { top: newTop });
          newTop += updatedToast.props.children.clientHeight + 3;
          return {
            ...alert,
            alert: updatedToast,
          };
        });
      });
    }, 1000);
  };

  // Set the `toast` instance globally when the component mounts
  useEffect(() => {
    setToastInstance(toast);
  }, [toast]);

  return (
    <ToastStackContext.Provider
      value={{
        toast,
      }}
    >
      {children}
      <div id="alert-container">
        {toastStackItems.length > 0 &&
          toastStackItems.map((alert) => (
            <div id={`toast-${alert.id}`} key={alert.id}>
              {alert.toast}
            </div>
          ))}
      </div>
    </ToastStackContext.Provider>
  );
};

export default ToastProvider;
