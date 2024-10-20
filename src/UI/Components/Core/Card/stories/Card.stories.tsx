import { Meta, StoryObj } from "@storybook/react";
import Card from "../Card";
import CardHeader from "../Card.Header";
import CardFooter from "../Card.Footer";
import Button from "../../Button/Button"; // Assuming you have a Button component
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import Title from "../../../Typography/Title/Title";
import "../../../../../main.css";

const meta: Meta<typeof Card> = {
  title: "Components/Core/Card",
  component: Card,
  subcomponents: { CardHeader, CardFooter },
  argTypes: {
    options: {
      control: "object",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "This is a simple card with default styles.",
    options: {
      bgVariant: "gray-200",
      textVariant: "gray-800",
      rounded: "md",
    },
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    options: {
      bgVariant: "standard-d",
      textVariant: "standard-l",
      shadow: {
        color: "standard",
        size: "xl",
      },
    },
    className: "w-[250px]",
    children: (
      <>
        <Card.Header>
          <img
            src="https://loremflickr.com/250/200"
            alt="Random"
            className="w-[250px] h-32 object-cover m-auto rounded"
          />
        </Card.Header>

        <Title options={{ padding: "p-1", size: "sm", align: FlexTypes.Start }}>
          Card 1
        </Title>
        <p className="px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita
          uptates. Vect eviet maiores assumend.
        </p>
        <Card.Footer>
          <Button
            options={{
              bgVariant: "approve",
              textVariant: "standard-l",
            }}
          >
            Click Me
          </Button>
        </Card.Footer>
      </>
    ),
  },
};

export const CustomShadowAndBorder: Story = {
  args: {
    options: {
      bgVariant: "white",
      textVariant: "black",
      border: { show: true, variant: "blue-500", radius: "lg" },
      shadow: { size: "lg", color: "blue-500" },
    },
    children: (
      <>
        <Card.Header>Custom Shadow and Border</Card.Header>
        <p>This card has custom shadow and border styling.</p>
      </>
    ),
  },
};

export const ComplexCard: Story = {
  args: {
    options: {
      bgVariant: "green-100",
      textVariant: "green-900",
      border: { show: true, variant: "green-300" },
      shadow: { size: "xl", color: "green-500" },
    },
    children: (
      <>
        <Card.Header>Complex Card Example</Card.Header>
        <p>This is a complex card with various content inside.</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <Card.Footer>
          <Button options={{ bgVariant: "green-500", textVariant: "white" }}>
            Confirm
          </Button>
          <Button options={{ bgVariant: "gray-500", textVariant: "white" }}>
            Cancel
          </Button>
        </Card.Footer>
      </>
    ),
  },
};
