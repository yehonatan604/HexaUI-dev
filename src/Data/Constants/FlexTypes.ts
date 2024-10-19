export const FlexTypes = {
    Start: "start",
    End: "end",
    Center: "center",
    SpaceBetween: "between",
    SpaceAround: "around",
    SpaceEvenly: "evenly",
    Baseline: "baseline",
    Stretch: "stretch",
}

declare global {
    type FlexTypes = typeof FlexTypes[keyof typeof FlexTypes];
};