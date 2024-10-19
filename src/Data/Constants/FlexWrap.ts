export const FlexWrap = {
    NoWrap: "nowrap",
    Wrap: "wrap",
    WrapReverse: "wrap-reverse"
}

declare global {
    type FlexWrap = typeof FlexWrap[keyof typeof FlexWrap];
};