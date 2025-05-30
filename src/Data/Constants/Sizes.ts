export const Sizes = {
    "Xxs": "xxs",
    "Xs": "xs",
    "Sm": "sm",
    "Md": "md",
    "Lg": "lg",
    "Xl": "xl",
    "2Xl": "2xl",
    "3Xl": "3xl",
    "4Xl": "4xl",
}

declare global {
    type Sizes = typeof Sizes[keyof typeof Sizes];
};
