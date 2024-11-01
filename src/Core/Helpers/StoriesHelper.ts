export const defaultStory = {
    parameters: {
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#292929" },
                { name: "light", value: "#ffffff" },
            ],
        },
    },
    argTypes: {
        options: {
            control: {
                type: "object",
            },
        },
        className: {
            control: "text",
        },
    },
};