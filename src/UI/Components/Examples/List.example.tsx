import {
  GiAbbotMeeple,
  GiAbstract004,
  GiAbstract057,
  GiBulletBill,
} from "react-icons/gi";
import useTheme from "../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { ListStyleTypes } from "../../../Data/Constants/ListStyleTypes";
import { Sizes } from "../../../Data/Constants/Sizes";
import Flex from "../Layout/Flex/Component";
import List from "../Typography/List/Component";
import Title from "../Typography/Title/Component";
import useColorPalette from "../../../Core/Hooks/useColorPallete";

const ListExample = () => {
  const mode = useTheme().mode;
  const { palette } = useColorPalette();
  const textColor = mode === "light" ? palette.info : palette.infoLight;

  return (
    <Flex options={{ direction: FlexDir.Col }} className="m-auto mb-5 w-4/5">
      <Title options={{ size: "sm", textVariant: textColor }}>List Examples</Title>
      <Flex
        options={{
          direction: FlexDir.Col,
          justify: FlexTypes.Center,
          align: FlexTypes.Center,
        }}
        className="m-auto gap-y-10"
      >
        <List
          options={{
            items: ["item 1", "item 2", "item 3"],
            textVariant: palette.primary,
            listStyle: ListStyleTypes.Decimal,
            fontSize: Sizes.Sm,
            gap: 1,
          }}
        />

        <Flex
          options={{
            direction: FlexDir.Row,
            justify: FlexTypes.Center,
            align: FlexTypes.Start,
            wrap: FlexWrap.Wrap,
          }}
          className="m-auto mb-5 gap-y-10 gap-x-20"
        >
          <List
            options={{
              items: ["item 1", "item 2", "item 3"],
              textVariant: palette.success,
              listStyle: ListStyleTypes.Circle,
              fontSize: Sizes.Sm,
              gap: 2,
              justify: FlexTypes.Start,
              align: FlexTypes.Start,
            }}
          />
          <List
            options={{
              items: ["item 1", "item 2", "item 3"],
              textVariant: palette.warning,
              listStyle: ListStyleTypes.Square,
              fontSize: Sizes.Md,
              gap: 3,
              justify: FlexTypes.End,
              align: FlexTypes.End,
            }}
          />
          <List
            options={{
              items: ["item 1", "item 2", "item 3"],
              textVariant: palette.failure,
              listStyle: ListStyleTypes.Disc,
              fontSize: Sizes.Md,
              gap: 4,
              justify: FlexTypes.Center,
              align: FlexTypes.Center,
              icons: [<GiBulletBill size={10} />],
            }}
          />
          <List
            options={{
              items: ["item 1", "item 2", "item 3"],
              listStyle: ListStyleTypes.Disc,
              fontSize: Sizes.Lg,
              gap: 5,
              justify: FlexTypes.Center,
              align: FlexTypes.Center,
              icons: [
                <GiBulletBill size={12} />,
                <GiAbbotMeeple size={12} />,
                <GiAbstract004 size={12} />,
              ],
              byOrder: true,
            }}
          />
          <List
            options={{
              items: ["item 1", "item 2", "item 3"],
              textVariant: "rainbow",
              listStyle: ListStyleTypes.Disc,
              fontSize: Sizes.Xl,
              gap: 6,
              justify: FlexTypes.Center,
              align: FlexTypes.Center,
              icons: [
                <GiBulletBill size={13} />,
                <GiAbbotMeeple size={13} />,
                <GiAbstract004 size={13} />,
                <GiAbstract057 size={13} />,
              ],
              byOrder: false,
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ListExample;
