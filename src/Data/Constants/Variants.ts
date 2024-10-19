export const Variants = {
    Info: "info",
    Success: "success",
    Warning: "warning",
    Failure: "failure",
    Standard: "standard",
    Primary: "primary",
    Secondary: "secondary",
    Select: "select",
    Cancel: "cancel",
    Approve: "approve",
    Danger: "danger",
}

declare global {
    type Variants = typeof Variants[keyof typeof Variants];
};
