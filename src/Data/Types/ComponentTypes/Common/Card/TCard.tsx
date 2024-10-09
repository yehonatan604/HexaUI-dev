import { TComponent, ComponentOptions } from "../../TComponent";
import { TSize } from "../../../TSize";

export type TCard = TComponent<"div"> & {
  options?: CardOptions;
};

export type CardOptions = ComponentOptions & {
  padding?: string;
  rounded?: TSize | string;
  gap?: number;
};
