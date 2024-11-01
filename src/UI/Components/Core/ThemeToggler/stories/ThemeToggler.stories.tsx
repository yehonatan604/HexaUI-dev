import ThemeProvider from "../../../../../Core/Context/ThemeContext/providers/Theme.provider";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import Flex from "../../../Layout/Flex/Flex";
import ThemeToggler from "../ThemeToggler";
import { CiSun } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Core/ThemeToggler",
  component: ThemeToggler,
  ...defaultStory,
} as Meta<typeof ThemeToggler>;

export const Default = () => (
  <ThemeProvider>
    <Flex className="dark:bg-gray-800 bg-gray-200 h-screen items-center justify-center">
      <ThemeToggler className="text-4xl" />
    </Flex>
  </ThemeProvider>
);

export const CustomIcons = () => (
  <ThemeProvider>
    <Flex center className="dark:bg-gray-800 bg-gray-200 h-screen">
      <ThemeToggler
        lightIcon={<CiSun />}
        darkIcon={<BsMoonStars />}
        className="text-4xl text-gray-800 dark:text-gray-200"
      />
    </Flex>
  </ThemeProvider>
);
