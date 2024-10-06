import { TCite } from "../../../../Data/Types/TCite";
import { TComponent } from "../../../../Data/Types/TComponent";

export type QuoteProps = TComponent<"blockquote"> & {
    cite: TCite;
    gap?: string;
};