import { Meta } from "@storybook/react";
import { GiAlliedStar } from "react-icons/gi";
import Flex from "../../../Layout/Flex/Flex";
import RainbowBorder from "../RainbowBorder";
import "../../../../../main.css";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";

export default {
  title: "Components/Core/RainbowBorder",
  component: RainbowBorder,
  ...defaultStory,
} as Meta<typeof RainbowBorder>;

export const Default = () => (
  <Flex center className="h-96">
    <RainbowBorder options={{ gradient: "from-red-500 to-yellow-500" }}>
      <div className="p-5 bg-white rounded text-black">Small Rainbow Border</div>
    </RainbowBorder>
  </Flex>
);

export const ThinRainbowBorder = () => (
  <Flex center className="h-96">
    <RainbowBorder options={{ thickness: "sm", gradient: "from-red-500 to-yellow-500" }}>
      <div className="p-5 bg-white rounded text-black">Small Rainbow Border</div>
    </RainbowBorder>
  </Flex>
);

export const MediumRainbowBorder = () => (
  <Flex center className="h-96">
    <RainbowBorder options={{ thickness: "md", gradient: "from-green-500 to-blue-500" }}>
      <div className="p-5 bg-white rounded text-black">Medium Rainbow Border</div>
    </RainbowBorder>
  </Flex>
);

export const ThickRainbowBorder = () => (
  <Flex center className="h-96">
    <RainbowBorder
      options={{ thickness: "2xl", gradient: "from-purple-500 to-pink-500" }}
    >
      <div className="p-5 bg-white rounded text-black">Large Rainbow Border</div>
    </RainbowBorder>
  </Flex>
);

// Custom Rainbow Border Example
export const CustomRainbowBorder = () => (
  <Flex center className="h-96">
    <RainbowBorder
      options={{
        thickness: "2xl",
        gradient: "from-indigo-500 via-purple-500 to-pink-500",
        rounded: "full",
        innerBgVariant: "black",
      }}
    >
      <div className="rounded-full">
        <GiAlliedStar size={100} />
      </div>
    </RainbowBorder>
  </Flex>
);
