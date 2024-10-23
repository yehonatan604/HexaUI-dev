import { TToastVariants } from "./TToastVariants";

export type TToastStackContext = {
    addToast: (id: string, toast: JSX.Element) => void;
    removeToast: (id: string) => void;
    toast: TToastVariants;
};
