export const ListStyleTypes = {
    Decimal: "decimal",
    Disc: "disc",
    Circle: "circle",
    Square: "square",
    DecimalLeadingZero: "decimal-leading-zero",
    LowerRoman: "lower-roman",
    UpperRoman: "upper-roman",
    LowerGreek: "lower-greek",
    LowerLatin: "lower-latin",
    UpperLatin: "upper-latin",
    Armenian: "armenian",
    Georgian: "georgian",
    LowerAlpha: "lower-alpha",
    UpperAlpha: "upper-alpha",
    None: "none",
}

declare global {
    type ListStyleTypes = typeof ListStyleTypes[keyof typeof ListStyleTypes];
};