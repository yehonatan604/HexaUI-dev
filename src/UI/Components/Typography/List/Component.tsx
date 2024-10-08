import { useEffect, useState } from "react";
import { getRandomColor } from "../../../..//Core/Helpers/Color.helper";
import { getRandomIcon } from "../../../..//Core/Helpers/Icons.helper";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { Sizes } from "../../../../Data/Constants/Sizes";
import Flex from "../../Layout/Flex/Component";
import { TList } from "../../../../Data/Types/ComponentTypes/Typography/List/TList";
import useTheme from "../../../../Core/Hooks/useTheme";

const List = (props: TList) => {
  const { options, ...componentProps } = props;

  // Hooks
  const { colors } = useTheme();
  const [isByOrder, setIsByOrder] = useState<boolean>(options?.byOrder || true);

  // Options
  const textColor = options?.textVariant || colors.standradLight;
  const textSize = options?.fontSize || Sizes.Xs;
  const gap = options?.gap || Sizes.Sm;
  const flexDirection = options?.flexDirection || FlexDir.Col;
  const align = options?.align || FlexTypes.Center;
  const justify = options?.justify || FlexTypes.Center;

  // Effects
  useEffect(() => {
    if (
      options?.byOrder &&
      options?.icons &&
      options?.icons.length < options?.items.length
    ) {
      console.warn(
        "Rainbow UI Warning: Icons length is less than items length. byOrder prop is ignored."
      );
      setIsByOrder(false);
    } else {
      setIsByOrder(options.byOrder);
    }
  }, [options]);

  // JSX
  return (
    <Flex
      options={{
        direction: FlexDir.Col,
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="gap-2 text-center"
    >
      <ul
        {...componentProps}
        style={{
          listStyleType: !options?.icons?.length ? options?.listStyle : "none",
        }}
        className={`flex flex-${flexDirection} justify-${justify} items-${align} gap-${gap}`}
      >
        {options?.items.map((item, index) => (
          <li
            key={index}
            className={`text-${textSize} text-${
              options?.textVariant === "rainbow" ? getRandomColor() : textColor
            }`}
          >
            <Flex
              options={{
                justify: FlexTypes.Center,
                align: FlexTypes.Center,
              }}
              className="gap-1"
            >
              {options?.icons && options?.icons.length > 0 && (
                <>
                  {options?.icons.length === 1
                    ? options?.icons[0]
                    : isByOrder
                    ? options?.icons[index]
                    : getRandomIcon(options?.icons)}
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
