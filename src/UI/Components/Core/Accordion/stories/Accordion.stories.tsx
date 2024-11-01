import { Meta } from "@storybook/react";
import Accordion from "../Accordion";
import "../../../../../main.css";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";

export default {
  title: "Components/Core/Accordion",
  component: Accordion,
  ...defaultStory,
} as Meta<typeof Accordion>;

export const Default = () => (
  <div className="w-1/4">
    <Accordion
      options={{
        title: "Accordion Title",
        textVariant: "gray-200",
      }}
    >
      This is the content of the accordion.
    </Accordion>
  </div>
);

export const Bordered = () => (
  <div className="w-1/4">
    <Accordion
      options={{
        title: "Accordion Title",
        textVariant: "gray-200",
        border: { variant: "gray-300", radius: "md" },
      }}
    >
      This is the content of the accordion.
    </Accordion>
  </div>
);

export const CustomContent = () => (
  <div className="w-1/4">
    <Accordion
      options={{
        title: "Custom Content",
        textVariant: "warning",
        border: { variant: "gray-300", radius: "md" },
        titleVariant: "blue-500",
      }}
    >
      <div>
        <p>This is a custom content for the accordion.</p>
        <p>It can contain any HTML element.</p>
      </div>
    </Accordion>
  </div>
);
