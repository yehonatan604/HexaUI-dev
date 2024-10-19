import { TComponentOptions } from "../../../../../Data/Types/TComponent";

export type TAccordionOptions = TComponentOptions & {
    title: string;
    titlePadding?: string;
    titleVariant?: string;
    contentPadding?: string;
    chevronVariant?: string;
    chevronSize?: string;
    chevronDirection?: string;
    icon?: JSX.Element;
}
