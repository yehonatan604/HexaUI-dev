import { useEffect, useState } from "react";
import Flex from "../../Layout/Flex/Component";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { BsCheck, BsExclamation, BsInfo } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import Hr from "../../Typography/Hr/Component";
import { createPortal } from "react-dom";
import useToast from "../../../../Core/Hooks/useToast";
import { TToast } from "./TToast";

const Toast = ({
  options,
  children,
  onFinished = () => {},
  className,
  id,
  top,
  isVisible,
  ...componentProps
}: TToast) => {
  const [progress, setProgress] = useState(0);
  const { removeAlert } = useToast();
  const [show, setShow] = useState(isVisible);

  // Effect to start showing the toast with animation
  useEffect(() => {
    setShow(true);
    const interval = setInterval(() => {
      setProgress((prev) => prev + 1);
      if (progress >= 100) {
        clearInterval(interval);
        onFinished();
      }
    }, 40);
    return () => {
      clearInterval(interval);
    };
  }, [onFinished, progress]);

  // Effect to manage toast dismissal when progress reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      setShow(false); // Trigger fade-out transition
      setTimeout(() => {
        removeAlert(id);
        onFinished();
      }, 1000); // Wait for the transition to complete before removing
    }
  }, [progress, id, removeAlert, onFinished]);

  const bgColor = options?.bgVariant || "black-l";
  const progressColor = options?.type || "info";
  const textColor = options?.textVariant || "zinc-100";
  const titleColor = options?.titleVariant || "black-l";
  const icon =
    options?.icon ||
    (options?.type === "info" ? (
      <BsInfo
        color="white"
        size={20}
        className="rounded-full bg-primary-d border border-standard-l"
      />
    ) : options?.type === "success" ? (
      <BsCheck
        color="white"
        size={20}
        className="rounded-full bg-success border border-standard-l"
      />
    ) : options?.type === "warning" ? (
      <BsExclamation
        color="white"
        size={20}
        className="rounded-full bg-amber-400 border border-standard-l"
      />
    ) : options?.type === "failure" ? (
      <BsExclamation
        color="white"
        size={20}
        className="rounded-full bg-failure border border-standard-l"
      />
    ) : (
      <BsInfo
        color="white"
        size={20}
        className="rounded-full bg-primary-d border border-standard-l"
      />
    ));

  return createPortal(
    <div
      className={`w-full bg-${bgColor} text-${textColor} rounded border border-black-l ${className} m-1 max-w-sm overflow-hidden shadow-lg`}
      style={{
        transform: show
          ? `translateX(0) translateY(${top}px)`
          : `translateX(100%) translateY(${top}px)`,

        transformBox: "fill-box",
        opacity: show ? 1 : 0,
        transition: "all 1s ease-out, opacity 1s ease-out",
        position: "fixed",
        right: "0",
        top: `0`, // Use top prop to set position dynamically
        zIndex: 50,
      }}
      {...componentProps}
    >
      <Flex options={{ direction: "col", align: FlexTypes.Center }}>
        <Flex
          options={{ align: FlexTypes.Center, justify: FlexTypes.SpaceBetween }}
          className="w-full p-1 bg-standard-l rounded-t"
        >
          {icon}
          <h3 className={`text-${titleColor} text-lg font-serif font-semibold`}>
            {options?.title}
          </h3>
          <div dir="rtl" className="cursor-pointer">
            <BiX
              color="dimgray"
              size={20}
              className="hover:opacity-70"
              onClick={() => {
                setShow(false);
                setTimeout(() => {
                  removeAlert(id);
                }, 1000);
              }}
            />
          </div>
        </Flex>
        <Hr options={{ width: "full" }} style={{ margin: 0 }} />
        <p className="p-2 w-full">{children}</p>
      </Flex>
      <div className="w-11/12 m-auto mt-2 h-5 mb-2 ring-2 ring-standard-l rounded-sm">
        <div
          className={`bg-gradient-to-r from-transparent to-${progressColor} h-full`}
          style={{
            width: `${progress}%`,
            transition: "width 0.1s",
            borderRadius: "0.1rem 0 0 0.1rem",
          }}
        />
      </div>
    </div>,
    document.getElementById("alert-container") as HTMLElement
  );
};

export default Toast;
