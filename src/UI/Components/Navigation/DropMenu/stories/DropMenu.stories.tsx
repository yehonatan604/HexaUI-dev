import { Meta, StoryObj } from "@storybook/react";
import DropMenu from "../DropMenu";
import "../../../../../main.css";

// Default export, this configures the story in Storybook
const meta: Meta<typeof DropMenu> = {
  title: "Components/Navigation/DropMenu",
  component: DropMenu,
  argTypes: {
    options: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropMenu>;

// Example of a default DropDown story
export const Default: Story = {
  args: {
    title: "DropMenu Title",
    options: {
      titleVariant: "white",
      textVariant: "warning",
      bgVariant: "black",
      titleDivGap: "gap-4",
      width: "44",
    },
    children: (
      <div>
        <p>item1</p>
        <p>item2</p>
        <p>item3</p>
      </div>
    ),
  },
};

// Example of a nested DropDown story
export const NestedDropDown: Story = {
  args: {
    title: "DropMenu",
    options: {
      titleVariant: "white",
      textVariant: "warning",
      bgVariant: "black",
      titleDivGap: "gap-4",
      width: "28",
    },
    children: (
      <div>
        <p>item1</p>
        <p>item2</p>
        <DropMenu
          title="item 3"
          options={{
            titleSize: "md",
            titleVariant: "warning",
            titleDivGap: "gap-4",
            textVariant: "warning",
            bgVariant: "black",
            width: "28",
          }}
          type="horizontal"
        >
          <p>item1</p>
          <p>item2</p>
          <p>item3</p>
        </DropMenu>
        <p>item4</p>
      </div>
    ),
  },
};
