import { TComponent } from "../../../../../Data/Types/TComponent";
import { TQuoteOptions } from "./TQuoteOptions";
import { TCite } from "./TCite";

export type TQuote = TComponent<"blockquote"> & {
    options: TQuoteOptions;
    cite: TCite;
}
