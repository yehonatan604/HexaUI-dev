import { TComponentOptions } from "../../../../../Data/Types/TComponent";

export type TSidebarItemOptions = TComponentOptions & {
    labelBgVariant?: string;
    labelVariant?: string;
    hoverBgVariant?: string;
    hoverTextVariant?: string;
    disableOpacityOnHover?: boolean;
}
