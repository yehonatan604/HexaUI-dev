import { TComponent, ComponentOptions } from "../../TComponent";
import { TCite } from "./TCite";

export type TQuote = TComponent<"blockquote"> & {
    options: QuoteOptions;
    cite: TCite;
}

export type QuoteOptions = ComponentOptions & {
    gap?: number;
}
