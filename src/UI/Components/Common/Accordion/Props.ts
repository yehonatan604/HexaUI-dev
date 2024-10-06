import { TComponent } from "../../../../Data/Types/TComponent";

export type AccordionProps = TComponent<"div"> & {
    title: string;
    variant?: string;
};