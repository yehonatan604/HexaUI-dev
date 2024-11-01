import { Meta } from "@storybook/react";
import { Sizes } from "../../../../../Data/Constants/Sizes";
import Flex from "../../../Layout/Flex/Flex";
import Ring from "../Ring";
import "../../../../../main.css";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";

export default {
  title: "Components/Core/Ring",
  component: Ring,
  ...defaultStory,
} as Meta<typeof Ring>;

export const Default = () => (
  <Flex center className="h-96">
    <Ring>
      <img
        src="https://loremflickr.com/250/200"
        alt="Random"
        className="w-full h-32 object-cover rounded"
      />
    </Ring>
  </Flex>
);

export const SuccessRing = () => (
  <Flex center className="h-96">
    <Ring
      options={{ ringVariant: "success", borderVariant: "primary", ringThickness: 4 }}
    >
      <img
        src="https://loremflickr.com/250/200"
        alt="Random"
        className="w-full h-32 object-cover rounded"
      />
    </Ring>
  </Flex>
);

export const PrimaryRingWithBorder = () => (
  <Flex center className="h-96">
    <Ring options={{ ringVariant: "blue-500", borderVariant: "black" }}>
      <img
        src="https://loremflickr.com/250/200"
        alt="Random"
        className="w-full h-32 object-cover rounded"
      />
    </Ring>
  </Flex>
);

export const WarningRingWithShadow = () => (
  <Flex center className="h-96">
    <Ring
      options={{
        ringVariant: "yellow-500",
        borderVariant: "purple-500",
        shadow: { color: "gray-500", size: Sizes.Lg },
      }}
    >
      <img
        src="https://loremflickr.com/250/200"
        alt="Random"
        className="w-full h-32 object-cover rounded"
      />
    </Ring>
  </Flex>
);

export const CancelRingWithPadding = () => (
  <Flex center className="h-96">
    <Ring
      options={{
        ringVariant: "primary",
        borderVariant: "success",
        shadow: { color: "gray-500", size: Sizes.Xl },
        padding: 2,
      }}
    >
      <img
        src="https://loremflickr.com/250/200"
        alt="Random"
        className="w-full h-32 object-cover rounded"
      />
    </Ring>
  </Flex>
);

export const CustomContentRing = () => (
  <Flex center className="h-96">
    <Ring
      options={{
        ringVariant: "black",
        bgVariant: "black-l",
        borderVariant: "failure-l",
        shadow: { color: "select", size: Sizes.Xl },
        padding: 4,
      }}
    >
      <div className="text-white">Content</div>
    </Ring>
  </Flex>
);

export const FullRoundedRing = () => (
  <Flex center className="h-96">
    <Ring
      options={{
        ringVariant: "red-500",
        borderVariant: "green-500",
        bgVariant: "lime-500",
        shadow: { color: "green-300", size: Sizes.Lg },
        textVariant: "white",
        padding: 4,
        rounded: "full",
      }}
    />
  </Flex>
);
