import { Meta, StoryObj } from "@storybook/react";
import { GiAlliedStar } from "react-icons/gi";
import { FlexDir } from "../../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import Flex from "../../../Layout/Flex/Flex";
import RainbowBorder from "../RainbowBorder";
import "../../../../../main.css";

export default {
  title: "Components/Core/RainbowBorder",
  component: RainbowBorder,
} as Meta<typeof RainbowBorder>;

// Create a wrapper to style your examples in Storybook
const StoryWrapper = ({ children }: { children: React.ReactNode }) => (
  <Flex
    options={{
      justify: FlexTypes.Center,
      align: FlexTypes.Center,
      wrap: "wrap",
      direction: FlexDir.Row,
    }}
    className="gap-4 w-full p-4"
  >
    {children}
  </Flex>
);

// Small Rainbow Border Example
export const SmallRainbowBorder: StoryObj<typeof RainbowBorder> = {
  render: () => (
    <StoryWrapper>
      <RainbowBorder
        options={{ thickness: "sm", gradient: "from-red-500 to-yellow-500" }}
      >
        <div className="p-5 bg-white rounded">Small Rainbow Border</div>
      </RainbowBorder>
    </StoryWrapper>
  ),
};

// Medium Rainbow Border Example
export const MediumRainbowBorder: StoryObj<typeof RainbowBorder> = {
  render: () => (
    <StoryWrapper>
      <RainbowBorder
        options={{ thickness: "md", gradient: "from-green-500 to-blue-500" }}
      >
        <div className="p-5 bg-white rounded">Medium Rainbow Border</div>
      </RainbowBorder>
    </StoryWrapper>
  ),
};

// Large Rainbow Border Example
export const LargeRainbowBorder: StoryObj<typeof RainbowBorder> = {
  render: () => (
    <StoryWrapper>
      <RainbowBorder
        options={{ thickness: "lg", gradient: "from-purple-500 to-pink-500" }}
      >
        <div className="p-5 bg-white rounded">Large Rainbow Border</div>
      </RainbowBorder>
    </StoryWrapper>
  ),
};

// Custom Rainbow Border Example
export const CustomRainbowBorder: StoryObj<typeof RainbowBorder> = {
  render: () => (
    <StoryWrapper>
      <RainbowBorder
        options={{
          thickness: "2xl",
          gradient: "from-indigo-500 via-purple-500 to-pink-500",
          rounded: "full",
          innerBgVariant: "black",
        }}
      >
        <div className="rounded-full text-white">
          <GiAlliedStar size={100} />
        </div>
      </RainbowBorder>
    </StoryWrapper>
  ),
};
