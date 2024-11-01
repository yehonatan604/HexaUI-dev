import "../../../../../main.css";
import List from "../List";
import { Meta } from "@storybook/react";
import { Sizes } from "../../../../../Data/Constants/Sizes";
import { ListStyleTypes } from "../../../../../Data/Constants/ListStyleTypes";
import {
  GiAbbotMeeple,
  GiAbstract004,
  GiAbstract057,
  GiBulletBill,
} from "react-icons/gi";
import Flex from "../../../Layout/Flex/Flex";

export default {
  title: "Components/DataDisplay/List",
  component: List,
} as Meta<typeof List>;

export const DefaultList = () => (
  <Flex center className="h-96">
    <List
      options={{
        items: ["Item 1", "Item 2", "Item 3"],
        textVariant: "primary",
        listStyle: ListStyleTypes.Decimal,
        fontSize: Sizes.Sm,
        gap: 1,
      }}
    />
  </Flex>
);

export const CircleList = () => (
  <Flex center className="h-96">
    <List
      options={{
        items: ["Item 1", "Item 2", "Item 3"],
        textVariant: "success",
        listStyle: ListStyleTypes.Circle,
        fontSize: Sizes.Sm,
        gap: 2,
      }}
    />
  </Flex>
);

export const SquareList = () => (
  <Flex center className="h-96">
    <List
      options={{
        items: ["Item 1", "Item 2", "Item 3"],
        textVariant: "warning",
        listStyle: ListStyleTypes.Square,
        fontSize: Sizes.Md,
        gap: 3,
      }}
    />
  </Flex>
);

export const ListWithIcon = () => (
  <Flex center className="h-96">
    <List
      options={{
        items: ["Item 1", "Item 2", "Item 3"],
        textVariant: "failure",
        listStyle: ListStyleTypes.Disc,
        fontSize: Sizes.Md,
        gap: 4,
        icons: [<GiBulletBill size={10} />],
      }}
    />
  </Flex>
);

export const OrderedIconsList = () => (
  <Flex center className="h-96">
    <List
      options={{
        items: ["Item 1", "Item 2", "Item 3"],
        listStyle: ListStyleTypes.Disc,
        fontSize: Sizes.Lg,
        gap: 5,
        icons: [
          <GiBulletBill size={12} />,
          <GiAbbotMeeple size={12} />,
          <GiAbstract004 size={12} />,
        ],
        byOrder: true,
      }}
    />
  </Flex>
);

export const RainbowList = () => (
  <Flex center className="h-96">
    <List
      options={{
        items: ["Item 1", "Item 2", "Item 3"],
        textVariant: "rainbow",
        listStyle: ListStyleTypes.Disc,
        fontSize: Sizes.Xl,
        gap: 4,
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
);
