import { TComponent, ComponentOptions } from "../../TComponent";

export type TNavbarLink = TComponent<"a"> & {
    options?: NavbarLinkOptions;
    to: string;
}

export type NavbarLinkOptions = ComponentOptions & {
    activeVariant?: string;
}