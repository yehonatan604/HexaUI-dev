import { TComponent, ComponentOptions } from "../../TComponent";

export type TAccordion = TComponent<"div"> & {
    options: AccordionOptions;
}

export type AccordionOptions = ComponentOptions & {
    title: string;
    titlePadding?: string;
    titleVariant?: string;
    contentPadding?: string;
    chevronVariant?: string;
    chevronSize?: string;
    chevronDirection?: string;
    icon?: JSX.Element;
}