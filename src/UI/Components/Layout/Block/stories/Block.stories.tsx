import ThemeProvider from "../../../../../Core/Context/ThemeContext/providers/Theme.provider";
import Block from "../Block";

// Storybook for Block Component
export default {
  title: "Components/Layout/Block",
  component: Block,
  argTypes: {
    options: { control: "object" },
    inline: { control: "boolean" },
    className: { control: "text" },
    innerClassName: { control: "text" },
  },
};

const Template = (args) => (
  <ThemeProvider>
    <Block {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Block",
  options: {
    textVariant: "white-d",
  },
};

export const CustomOptions = Template.bind({});
CustomOptions.args = {
  options: {
    bgVariant: "blue-500",
    textVariant: "gray-900",
    border: {
      variant: "blue-300",
      thickness: "border-2",
      radius: "rounded-lg",
    },
    padding: "6",
    innerPadding: "2",
  },
  inline: false,
  className: "custom-class",
  innerClassName: "inner-custom-class",
  children: "Custom Block",
};

export const InlineBlock = Template.bind({});
InlineBlock.args = {
  inline: true,
  options: {
    textVariant: "success",
  },
  children: (
    <>
      <p>Inline Block 1</p>
      <p>Inline Block 2</p>
    </>
  ),
};
