import useTheme from "../../../../Core/Hooks/useTheme";
import CardFooter from "./Card.Footer/Component";
import CardHeader from "./Card.Header/Component";
import { CardProps } from "./Props";

const Card = (props: CardProps) => {
  const { children, shadow = true, className, ...componentProps } = props;
  const mode = useTheme().mode;

  const bgColor = mode === "light" ? "bg-stone-100" : "bg-stone-900";
  const textColor = mode === "light" ? "text-gray-900" : "text-slate-200";
  const cardShadow = shadow ? "shadow-lg" : "";
  const shadowColor = mode === "light" ? "shadow-slate-800" : "shadow-stone-400";

  return (
    <div
      className={`p-2 rounded-lg ${cardShadow} ${shadowColor} ${className} ${bgColor} ${textColor}`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Footer = CardFooter;
export default Card;
