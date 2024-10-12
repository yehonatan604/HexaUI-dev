import { TAlert } from "../../../../Data/Types/ComponentTypes/Common/Alert/TAlert";
import { useEffect, useState } from "react";
import Flex from "../../Layout/Flex/Component";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { BsCheck, BsExclamation, BsInfo } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import Hr from "../../Typography/Hr/Component";

const Alert = ({
  options,
  children,
  onFinished = () => {},
  show,
  setShow,
  className,
  ...componentProps
}: TAlert) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (show) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 40);
      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [show]);

  useEffect(() => {
    if (progress > 100) {
      setShow(false);
      setProgress(0);
      onFinished();
    }
  }, [progress, children, onFinished, setShow]);

  const location =
    options?.placement === "topLeft"
      ? "top-0 left-0"
      : options?.placement === "topRight"
      ? "top-0 right-0"
      : options?.placement === "bottomLeft"
      ? "bottom-0 left-0"
      : options?.placement === "bottomRight"
      ? "bottom-0 right-0"
      : "top-0 right-0";

  const alertLocation = location || "top-0 right-0";
  const bgColor = options?.bgVariant || "standard-d";
  const textColor = options?.textVariant || "zinc-100";
  const titleColor = options?.titleVariant || "black-l";
  const icon =
    options?.icon ||
    (options?.type === "info" ? (
      <BsInfo
        color="white"
        size={20}
        className={`rounded-full bg-primary-d border border-standard-l`}
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
        className={`rounded-full bg-primary-d border border-standard-l`}
      />
    ));

  return (
    <div
      className={`w-full bg-${bgColor} text-${textColor} rounded border border-black-l  ${className}
      fixed z-50 ${alertLocation} m-1 max-w-sm overflow-hidden shadow-lg
      }
      `}
      style={{
        transform: show ? "translateX(0)" : "translateX(200%)",
        opacity: show ? 1 : 0,
        transition: "transform 1.2s ease-in-out, opacity 1.2s ease-in-out",
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
          <div dir="rtl" className="cursor-pointer" onClick={() => setShow(false)}>
            <BiX color="dimgray" size={20} className="hover:opacity-70" />
          </div>
        </Flex>
        <Hr
          options={{
            width: "full",
          }}
          style={{ margin: 0 }}
        />
        <p className="p-2 w-full">{children}</p>
      </Flex>
      <div className="w-11/12 m-auto mt-2 h-5 mb-2 ring-2 ring-standard-l rounded-sm">
        <div
          className={`bg-standard h-full`}
          style={{
            width: `${progress}%`,
            transition: "width 0.1s",
            borderRadius: "0.1rem 0 0 0.1rem",
          }}
        />
      </div>
    </div>
  );
};

export default Alert;
