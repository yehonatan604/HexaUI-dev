import "../../../../../main.css";
import ThemeProvider from "../../../../../Core/Context/ThemeContext/providers/Theme.provider";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import Flex from "../../../Layout/Flex/Flex";
import Checkbox from "../Checkbox";

export default {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  ...defaultStory,
};

export const Default = () => {
  return (
    <ThemeProvider>
      <Flex center options={{ direction: "col" }} className={`mt-10 gap-4`}>
        <Checkbox label="is checked" />
        <Checkbox label="is checked" defaultChecked />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: "primary",
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: "warning",
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: "failure",
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: "success",
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: "standrad",
            },
          }}
        />
      </Flex>
    </ThemeProvider>
  );
};
