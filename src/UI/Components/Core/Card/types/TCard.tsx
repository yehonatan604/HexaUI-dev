import { TComponent } from "../../../../../Data/Types/TComponent";
import { TCardOptions } from "./TCardOptions";

export type TCard = TComponent<"div"> & {
  options?: TCardOptions;
};
