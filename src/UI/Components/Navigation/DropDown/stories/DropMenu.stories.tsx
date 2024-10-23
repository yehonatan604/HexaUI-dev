import { Meta, StoryObj } from "@storybook/react";
import DropMenu from "../DropMenu";
import "../../../../../main.css";

// Default export, this configures the story in Storybook
const meta: Meta<typeof DropMenu> = {
  title: "Components/Navigation/DropDown",
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
    title: "DropDown Title",
    options: {
      bgVariant: "white",
      textVariant: "gray-800",
      border: {
        variant: "gray-300",
        radius: "md",
      },
      titleVariant: "blue-500",
    },
    children: (
      <div>
        <p>This is the content of the dropdown.</p>
      </div>
    ),
  },
};

// Example of a DropDown story with custom content
export const CustomContent: Story = {
  args: {
    title: "Custom DropDown Title",
    options: {
      bgVariant: "white",
      textVariant: "gray-800",
      border: {
        variant: "blue-500",
        radius: "lg",
      },
      titleVariant: "red-500",
    },
    children: (
      <div>
        <p>This is custom content for the dropdown.</p>
        <p>You can add anything here!</p>
      </div>
    ),
  },
};

// Another variant of the DropDown
export const WithIcons: Story = {
  args: {
    title: "DropDown with Icons",
    options: {
      bgVariant: "blue-100",
      textVariant: "blue-900",
      border: {
        variant: "blue-500",
        radius: "lg",
      },
      titleVariant: "blue-700",
    },
    children: (
      <div>
        <p>This dropdown shows icons for up/down arrow.</p>
      </div>
    ),
  },
};

// Example of a nested DropDown story
export const NestedDropDown: Story = {
  args: {
    title: "DropMenu",
    options: {
      titleVariant: "cancel",
      textVariant: "success",
      bgVariant: "black",
      titleDivGap: "gap-4",
    },
    children: (
      <div>
        <p>item1</p>
        <p>item2</p>
        <DropMenu
          title="item 3"
          options={{
            titleSize: "md",
            titleVariant: "success",
            titleDivGap: "gap-4",
            textVariant: "success",
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
