import { TComponent, TComponentOptions } from "../../../../../Data/Types/TComponent";

export type TNavbarLink = TComponent<"a"> & {
    options?: NavbarLinkOptions;
    to: string;
}

export type NavbarLinkOptions = TComponentOptions & {
    activeVariant?: string;
}