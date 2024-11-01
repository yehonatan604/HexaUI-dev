import { createPortal } from "react-dom";
import { TModal } from "./types/TModal";

const Modal = (props: TModal) => {
  const { children, isOpen, className, ...componentProps } = props;

  // JSX
  return isOpen
    ? createPortal(
        <div
          className={`modal ${className}`}
          {...componentProps}
          style={{
            width: "auto",
            height: "auto",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "1rem",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            border: "none",
            overflow: "hidden",
          }}
        >
          {children}
        </div>,
        document.getElementById("modal-container") as HTMLElement
      )
    : null;
};

export default Modal;
