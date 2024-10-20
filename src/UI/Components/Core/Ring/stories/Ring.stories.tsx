import { Meta, StoryObj } from "@storybook/react";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../../Data/Constants/FlexWrap";
import { Sizes } from "../../../../../Data/Constants/Sizes";
import Flex from "../../../Layout/Flex/Flex";
import Ring from "../Ring";
import "../../../../../main.css";

// Set up metadata for the story
export default {
  title: "Components/Core/Ring",
  component: Ring,
} as Meta<typeof Ring>;

// A wrapper for flex layout to center the Ring examples
const StoryWrapper = ({ children }: { children: React.ReactNode }) => (
  <Flex
    options={{
      justify: FlexTypes.Center,
      align: FlexTypes.Center,
      wrap: FlexWrap.Wrap,
    }}
    className="gap-4 gap-y-1 w-3/5 p-10"
  >
    {children}
  </Flex>
);

// Default Ring Example with an image inside
export const DefaultRing: StoryObj<typeof Ring> = {
  render: () => (
    <StoryWrapper>
      <Ring>
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </Ring>
    </StoryWrapper>
  ),
};

// Ring with success ring variant
export const SuccessRing: StoryObj<typeof Ring> = {
  render: () => (
    <StoryWrapper>
      <Ring
        options={{ ringVariant: "success", borderVariant: "primary", ringThickness: 4 }}
      >
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </Ring>
    </StoryWrapper>
  ),
};

// Ring with primary ring and black border
export const PrimaryRingWithBorder: StoryObj<typeof Ring> = {
  render: () => (
    <StoryWrapper>
      <Ring options={{ ringVariant: "blue-500", borderVariant: "black" }}>
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </Ring>
    </StoryWrapper>
  ),
};

// Ring with warning ring, select border, and shadow
export const WarningRingWithShadow: StoryObj<typeof Ring> = {
  render: () => (
    <StoryWrapper>
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
    </StoryWrapper>
  ),
};

// Ring with cancel color ring, border, and padding
export const CancelRingWithPadding: StoryObj<typeof Ring> = {
  render: () => (
    <StoryWrapper>
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
    </StoryWrapper>
  ),
};

// Ring with custom content inside
export const CustomContentRing: StoryObj<typeof Ring> = {
  render: () => (
    <StoryWrapper>
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
    </StoryWrapper>
  ),
};

// Full rounded ring with lime background and shadow
export const FullRoundedRing: StoryObj<typeof Ring> = {
  render: () => (
    <StoryWrapper>
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
    </StoryWrapper>
  ),
};
