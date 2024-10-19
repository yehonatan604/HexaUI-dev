import { TToastVariants } from "../../../../UI/Components/Core/Toast/types/TToastVariants";

export type TToastStackContext = {
    addToast: (id: string, toast: JSX.Element) => void;
    removeToast: (id: string) => void;
    toast: TToastVariants;
};
