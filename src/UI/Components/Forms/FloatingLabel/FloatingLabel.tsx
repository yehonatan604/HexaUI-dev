import { TFloatingLabel } from "./types/TFlotingLabel";
import generateRandomId from "../../../../Core/Helpers/IdHelper";

const FloatingLabel = (props: TFloatingLabel) => {
  const { label, innerClassName, options, className, ...componentProps } = props;

  const inputId = "input" + generateRandomId();

  // Options with defaults
  const labelColor = options?.labelTextVariant || "text-gray-600";
  const labelBgColor = options?.labelBgVariant || "black";
  const helperText = options?.helperText;
  const helperTextColor = options?.helperTextVariant || "text-gray-500";
  const ringColor = options?.ring?.variant || "blue";
  const ringWidth = options?.ring?.thickness || "2";
  const type = options?.type || "bordered";

  // Check if input has value
  const hasValue = Boolean(componentProps.value);

  const getBorderStyles = () => {
    if (type === "underlined") {
      return `
        border-0 border-b 
        rounded-none
        focus:border-b-${ringColor}-500
        focus:ring-0
      `;
    }

    return `
      border rounded-lg
      focus:border-${ringColor}-500
      focus:ring-${ringWidth}
      focus:ring-${ringColor}-500/20
    `;
  };

  const getLabelStyles = () => {
    if (type === "underlined") {
      return `
      left-3 -top-1.5
      peer-placeholder-shown:top-3
      peer-focus:-top-2.5
      peer-focus:-translate-y
      `;
    }

    return `
      left-3 -top-2.5
      peer-placeholder-shown:top-3
      peer-focus:-top-2.5
      peer-focus:-translate-y-0
      bg-${labelBgColor}
      px-1
    `;
  };

  return (
    <div className={`relative ${className}`}>
      <input
        {...componentProps}
        placeholder=" " // Empty placeholder for CSS targeting
        className={`
          peer w-full px-3  
          border-gray-300
          bg-transparent
          text-gray-900 text-base
          focus:outline-none
          transition-all duration-200 ease-out
          ${getBorderStyles()}
          ${innerClassName}
        `}
        id={inputId}
      />

      <label
        className={`
          absolute
          text-sm
          transition-all duration-200 ease-out
          cursor-text
          ${labelColor}
          ${hasValue ? `text-${ringColor}-500` : ""}
          ${getLabelStyles()}
        `}
        htmlFor={inputId}
      >
        {label}
      </label>

      {helperText && <p className={`mt-1 text-sm ${helperTextColor}`}>{helperText}</p>}
    </div>
  );
};

export default FloatingLabel;
