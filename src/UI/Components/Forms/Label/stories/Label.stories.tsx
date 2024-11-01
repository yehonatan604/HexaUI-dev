import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import Label from "../Label";

export default {
  title: "Components/Forms/Label",
  component: Label,
  ...defaultStory,
};

export const Default = () => <Label text="Hello World!" />;
