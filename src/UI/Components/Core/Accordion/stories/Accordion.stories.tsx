import { Meta, StoryObj } from "@storybook/react";
import Accordion from "../Accordion";
import "../../../../../main.css";

// Default export, this configures the story in Storybook
const meta: Meta<typeof Accordion> = {
  title: "Components/Core/Accordion",
  component: Accordion,
  argTypes: {
    options: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Example of a default Accordion story
export const Default: Story = {
  args: {
    options: {
      title: "Accordion Title",
      bgVariant: "white",
      textVariant: "gray-800",
      border: {
        variant: "gray-300",
        radius: "md",
      },
      titleVariant: "blue-500",
    },
    children: "This is the content of the accordion.",
  },
};

// Example of an Accordion story with custom content
export const CustomContent: Story = {
  args: {
    options: {
      title: "Custom Accordion Title",
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
        <p>This is custom content for the accordion.</p>
        <p>You can add anything here!</p>
      </div>
    ),
  },
};

// Another variant of the Accordion
export const WithIcons: Story = {
  args: {
    options: {
      title: "Accordion with Icons",
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
        <p>This accordion shows icons for up/down arrow.</p>
      </div>
    ),
  },
};
