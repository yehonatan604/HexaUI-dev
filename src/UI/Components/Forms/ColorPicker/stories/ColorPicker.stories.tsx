import ThemeProvider from "../../../../../Core/Context/ThemeContext/providers/Theme.provider";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import "../../../../../main.css";
import ThemeToggler from "../../../Core/ThemeToggler/ThemeToggler";
import Flex from "../../../Layout/Flex/Flex";
import ColorPicker from "../ColorPicker";

export default {
  title: "Components/Forms/ColorPicker",
  component: ColorPicker,
};

export const Default = () => {
  return (
    <ThemeProvider>
      <Flex
        options={{
          justify: FlexTypes.Center,
          align: FlexTypes.Center,
          direction: "col",
        }}
        className="m-auto my-5 gap-4 w-3/4"
      >
        <ThemeToggler className="text-3xl" />
        <ColorPicker />
      </Flex>
    </ThemeProvider>
  );
};
