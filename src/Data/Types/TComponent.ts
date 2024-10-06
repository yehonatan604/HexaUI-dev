import { ComponentProps, JSXElementConstructor, JSX } from "react";

export type TComponent<T extends JSXElementConstructor<unknown> | keyof JSX.IntrinsicElements> = ComponentProps<T>;
