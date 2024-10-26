import List from "../List";
import { Meta, StoryFn } from "@storybook/react";
import { Sizes } from "../../../../../Data/Constants/Sizes";
import { ListStyleTypes } from "../../../../../Data/Constants/ListStyleTypes";
import {
  GiAbbotMeeple,
  GiAbstract004,
  GiAbstract057,
  GiBulletBill,
} from "react-icons/gi";

export default {
  title: "Components/DataDisplay/List",
  component: List,
} as Meta;

const Template: StoryFn<typeof List> = (args) => <List {...args} />;

export const DefaultList = Template.bind({});
DefaultList.args = {
  options: {
    items: ["Item 1", "Item 2", "Item 3"],
    textVariant: "primary",
    listStyle: ListStyleTypes.Decimal,
    fontSize: Sizes.Sm,
    gap: 1,
  },
};

export const CircleList = Template.bind({});
CircleList.args = {
  options: {
    items: ["Item 1", "Item 2", "Item 3"],
    textVariant: "success",
    listStyle: ListStyleTypes.Circle,
    fontSize: Sizes.Sm,
    gap: 2,
  },
};

export const SquareList = Template.bind({});
SquareList.args = {
  options: {
    items: ["Item 1", "Item 2", "Item 3"],
    textVariant: "warning",
    listStyle: ListStyleTypes.Square,
    fontSize: Sizes.Md,
    gap: 3,
  },
};

export const ListWithIcon = Template.bind({});
ListWithIcon.args = {
  options: {
    items: ["Item 1", "Item 2", "Item 3"],
    textVariant: "failure",
    listStyle: ListStyleTypes.Disc,
    fontSize: Sizes.Md,
    gap: 4,
    icons: [<GiBulletBill size={10} />],
  },
};

export const OrderedIconsList = Template.bind({});
OrderedIconsList.args = {
  options: {
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
  },
};

export const RainbowList = Template.bind({});
RainbowList.args = {
  options: {
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
  },
};
