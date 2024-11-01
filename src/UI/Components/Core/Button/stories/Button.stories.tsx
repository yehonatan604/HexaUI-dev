import { Sizes } from "../../../../../Data/Constants/Sizes";
import Button from "../Button";
import "../../../../../main.css";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Core/Button",
  component: Button,
  ...defaultStory,
  children: {
    control: "text",
  },
} as Meta<typeof Button>;

export const Default = () => <Button>Default Button</Button>;

export const Large = () => <Button options={{ size: Sizes.Lg }}>Large Button</Button>;

export const Small = () => <Button options={{ size: Sizes.Sm }}>Small Button</Button>;

export const RoundedStart = () => (
  <Button options={{ size: Sizes.Md, roundedS: true }}>Rounded Start</Button>
);

export const RoundedEnd = () => (
  <Button options={{ size: Sizes.Md, roundedE: true }}>Rounded End</Button>
);

export const SquareButton = () => (
  <Button options={{ size: Sizes.Md, notRounded: true }}>Square Button</Button>
);
