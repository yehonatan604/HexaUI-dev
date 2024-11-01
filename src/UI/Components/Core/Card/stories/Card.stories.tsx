import { Meta } from "@storybook/react";
import Card from "../Card";
import Button from "../../Button/Button"; // Assuming you have a Button component
import "../../../../../main.css";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import Flex from "../../../Layout/Flex/Flex";

export default {
  title: "Components/Core/Card",
  component: Card,
  subcomponents: { ["Card.Header"]: Card.Header, ["Card.Footer"]: Card.Footer },
  ...defaultStory,
  argTypes: {
    children: {
      control: "text",
    },
  },
} as Meta<typeof Card>;

export const Default = () => (
  <Flex center className="h-96">
    <div className="w-1/4">
      <Card className="h-48">
        <p className="m-auto">This is a default card with no extra content.</p>
      </Card>
    </div>
  </Flex>
);

export const WithHeaderAndFooter = () => (
  <Flex center className="h-96">
    <div className="w-1/4">
      <Card options={{ bgVariant: "gray-200", textVariant: "primary-d", rounded: "md" }}>
        <Card.Header options={{ textVariant: "primary" }}>Card Header</Card.Header>
        <p>This card has a header and a footer.</p>
        <Card.Footer>Card Footer</Card.Footer>
      </Card>
    </div>
  </Flex>
);

export const CustomCard = () => (
  <Flex center className="h-96">
    <div className="w-1/4">
      <Card
        options={{
          bgVariant: "gray-200",
          textVariant: "primary-d",
          border: { show: true, variant: "success", radius: "md" },
          shadow: { size: "lg", color: "failure-l" },
        }}
      >
        <Card.Header options={{ textVariant: "approve" }}>
          Complex Card Example
        </Card.Header>
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
      </Card>
    </div>
  </Flex>
);
