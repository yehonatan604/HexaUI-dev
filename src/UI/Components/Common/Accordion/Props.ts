import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type AccordionProps = TComponent<"div"> & {
    title: string;
    variant?: string;
};