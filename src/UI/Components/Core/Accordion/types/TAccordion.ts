import { TComponent } from "../../../../../Data/Types/TComponent";
import { TAccordionOptions } from "./TAccordionOptions";

export type TAccordion = TComponent<"div"> & {
    options: TAccordionOptions;
}

