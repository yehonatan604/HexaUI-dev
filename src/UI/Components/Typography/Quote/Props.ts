import { TCite } from "../../../../Data/Types/ComponentTypes/Typography/Quote/TCite";
import { TComponent } from "../../../../Data/Types/ComponentTypes/TComponent";

export type QuoteProps = TComponent<"blockquote"> & {
    cite: TCite;
    gap?: string;
};