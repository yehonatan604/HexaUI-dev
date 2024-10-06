import { useEffect, useState } from "react";
import { ListProps } from "./Props";
import { getRandomColor } from "../../../..//Core/Helpers/Color.helper";
import { getRandomIcon } from "../../../..//Core/Helpers/Icons.helper";
import useColorPalette from "../../../..//Core/Hooks/useColorPallete";
import useTheme from "../../../..//Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { Sizes } from "../../../../Data/Constants/Sizes";
import { Variants } from "../../../../Data/Constants/Variants";
import Flex from "../../Layout/Flex/Component";
import Title from "../Title/Component";

const List = (props: ListProps) => {
  const {
    items,
    variant,
    listStyle = "none",
    fontSize = Sizes.Xs,
    dir = "ltr",
    flexDirection = FlexDir.Col,
    align = FlexTypes.Center,
    justify = FlexTypes.Center,
    gap = Sizes.Sm,
    icons,
    byOrder = false,
    listTitle,
    ...componentProps
  } = props;

  // Hooks
  const [isByOrder, setIsByOrder] = useState(byOrder);
  const mode = useTheme().mode;
  const getColor = useColorPalette().getColor;

  // Color Palette
  const { light: lightStandard, dark: darkStandard } = getColor(Variants.Standard)!;
  const { light: lightFailure, dark: darkFailure } = getColor(Variants.Failure)!;
  const { light: lightSuccess, dark: darkSuccess } = getColor(Variants.Success)!;
  const { light: lightWarning, dark: darkWarning } = getColor(Variants.Warning)!;
  const { light: lightInfo, dark: darkInfo } = getColor(Variants.Info)!;
  const { light: lightLime, dark: darkLime } = getColor(Variants.Lime)!;
  const { light: lightCyan, dark: darkCyan } = getColor(Variants.Cyan)!;
  const { light: lightPurple, dark: darkPurple } = getColor(Variants.Purple)!;
  const { light: lightPink, dark: darkPink } = getColor(Variants.Pink)!;

  // Colors
  let textColor = "";
  if (variant === Variants.Standard) {
    textColor = mode === "light" ? `text-${lightStandard}` : `text-${darkStandard}`;
  } else if (variant === Variants.Failure) {
    textColor = mode === "light" ? `text-${lightFailure}` : `text-${darkFailure}`;
  } else if (variant === Variants.Success) {
    textColor = mode === "light" ? `text-${lightSuccess}` : `text-${darkSuccess}`;
  } else if (variant === Variants.Warning) {
    textColor = mode === "light" ? `text-${lightWarning}` : `text-${darkWarning}`;
  } else if (variant === Variants.Info) {
    textColor = mode === "light" ? `text-${lightInfo}` : `text-${darkInfo}`;
  } else if (variant === Variants.Lime) {
    textColor = mode === "light" ? `text-${lightLime}` : `text-${darkLime}`;
  } else if (variant === Variants.Cyan) {
    textColor = mode === "light" ? `text-${lightCyan}` : `text-${darkCyan}`;
  } else if (variant === Variants.Purple) {
    textColor = mode === "light" ? `text-${lightPurple}` : `text-${darkPurple}`;
  } else if (variant === Variants.Pink) {
    textColor = mode === "light" ? `text-${lightPink}` : `text-${darkPink}`;
  } else if (variant === "random") {
    textColor = getRandomColor();
  } else {
    textColor = mode === "light" ? `text-${lightStandard}` : `text-${darkStandard}`;
  }

  // Text Size
  let textSize = "";
  if (fontSize === Sizes.Xs) textSize = "text-xs";
  else if (fontSize === Sizes.Sm) textSize = "text-sm";
  else if (fontSize === Sizes.Md) textSize = "text-base";
  else if (fontSize === Sizes.Lg) textSize = "text-lg";
  else if (fontSize === Sizes.Xl) textSize = "text-2xl";
  else if (fontSize === Sizes.Xxl) textSize = "text-3xl";
  else textSize = fontSize;

  // Flex Gap
  let flexGap = "";
  if (gap === Sizes.Xxs) flexGap = "gap-1";
  else if (gap === Sizes.Xs) flexGap = "gap-2";
  else if (gap === Sizes.Sm) flexGap = "gap-3";
  else if (gap === Sizes.Md) flexGap = "gap-4";
  else if (gap === Sizes.Lg) flexGap = "gap-5";
  else if (gap === Sizes.Xl) flexGap = "gap-6";
  else if (gap === Sizes.Xxl) flexGap = "gap-7";
  else flexGap = gap;

  // Effects
  useEffect(() => {
    if (byOrder && icons && icons.length < items.length) {
      console.warn(
        "Rainbow UI Warning: Icons length is less than items length. byOrder prop is ignored."
      );
      setIsByOrder(false);
    } else {
      setIsByOrder(byOrder);
    }
  }, [byOrder, icons, items.length]);

  // JSX
  return (
    <Flex
      direction={FlexDir.Col}
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      className="gap-2 text-center"
    >
      {listTitle && (
        <Title className={`${textSize} ${listTitle.color ? listTitle.color : textColor}`}>
          {listTitle.text}
        </Title>
      )}
      <ul
        {...componentProps}
        style={{
          listStyleType: !icons?.length ? listStyle : "none",
          direction: dir,
        }}
        className={`flex flex-${flexDirection} justify-${justify} items-${align} ${flexGap}`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={`${textSize} ${
              variant === "rainbow" ? getRandomColor() : textColor
            }`}
          >
            <Flex justify={FlexTypes.Center} align={FlexTypes.Center} className="gap-1">
              {icons && icons.length > 0 && (
                <>
                  {icons.length === 1
                    ? icons[0]
                    : isByOrder
                    ? icons[index]
                    : getRandomIcon(icons)}
                </>
              )}
              {item}
            </Flex>
          </li>
        ))}
      </ul>
    </Flex>
  );
};

export default List;
