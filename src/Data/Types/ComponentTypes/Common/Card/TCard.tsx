import { TComponent, ComponentOptions } from "../../TComponent";
import { Tsize } from "../../../TSize";

export type TCard = TComponent<"div"> & {
  options?: CardOptions;
};

export type CardOptions = ComponentOptions & {
  padding?: string;
  rounded?: Tsize | string;
  gap?: number;
};
