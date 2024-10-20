import { Sizes } from "../../../../../Data/Constants/Sizes";
import Button from "../Button";
import "../../../../../main.css";

// This is the default export that sets up the metadata for your component
export default {
  title: "Components/Core/Button", // Organize it under "Example/Button" in Storybook
  component: Button,
  argTypes: {
    options: {
      control: {
        type: "object", // Allows the options prop to be edited as an object
      },
    },
    className: {
      control: "text", // Allows className to be edited
    },
    children: {
      control: "text", // Allows dynamic text inside the button
    },
  },
};

// Create a template for the component
const Template = (args) => <Button {...args} />;

// The default story, showing a basic button
export const Default = Template.bind({});
Default.args = {
  children: "Button",
  options: {
    size: Sizes.Md,
    bgVariant: "primary",
    textVariant: "white",
    notRounded: false,
    roundedS: false,
    roundedE: false,
  },
};

// A story showcasing different sizes
export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  options: {
    size: Sizes.Lg,
    bgVariant: "primary",
    textVariant: "white",
  },
};

export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  options: {
    size: Sizes.Sm,
    bgVariant: "secondary",
    textVariant: "white",
  },
};

// A story showcasing the button with different rounded options
export const RoundedStart = Template.bind({});
RoundedStart.args = {
  children: "Rounded Start",
  options: {
    size: Sizes.Md,
    roundedS: true,
    bgVariant: "success",
    textVariant: "white",
  },
};

export const RoundedEnd = Template.bind({});
RoundedEnd.args = {
  children: "Rounded End",
  options: {
    size: Sizes.Md,
    roundedE: true,
    bgVariant: "danger",
    textVariant: "white",
  },
};

// Another variation showcasing the `notRounded` option
export const SquareButton = Template.bind({});
SquareButton.args = {
  children: "Square Button",
  options: {
    size: Sizes.Md,
    notRounded: true,
    bgVariant: "warning",
    textVariant: "black",
  },
};
