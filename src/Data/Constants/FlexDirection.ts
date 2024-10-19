export const FlexDir = {
    Row: "row",
    RowReverse: "row-reverse",
    Col: "col",
    ColReverse: "col-reverse"
}

declare global {
    type FlexDir = typeof FlexDir[keyof typeof FlexDir];
};
