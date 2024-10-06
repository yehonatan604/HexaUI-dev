import { TColor } from "../Types/TColor";

const defaultColorPalette: TColor[] = [
    // variants
    { name: "standard", dark: "zinc-300", light: "zinc-800" },
    { name: "failure", dark: "red-300", light: "red-800" },
    { name: "success", dark: "green-300", light: "green-800" },
    { name: "warning", dark: "yellow-300", light: "yellow-800" },
    { name: "info", dark: "blue-300", light: "blue-800" },
    { name: "lime", dark: "lime-300", light: "lime-800" },
    { name: "cyan", dark: "cyan-300", light: "cyan-800" },
    { name: "purple", dark: "purple-300", light: "purple-800" },
    { name: "pink", dark: "pink-300", light: "pink-800" },

    // component specific
    { name: "quote", dark: "zinc-300", light: "zinc-900" },
    { name: "cite", dark: "zinc-400", light: "zinc-500" },
    { name: "citeHover", dark: "blue-300", light: "blue-600" },
    { name: "hr", dark: "zinc-500", light: "zinc-500" },
    { name: "navbarText", dark: "zinc-50", light: "zinc-50" },
    { name: "navbarBackground", dark: "zinc-800", light: "zinc-800" },
    { name: "navbarLink", dark: "zinc-200", light: "zinc-200", active: "amber-200" },
    { name: "textInput", dark: "zinc-200", light: "zinc-900", failure: "red-500", success: "green-500", ring: "sky-500", standard: "gray-400" },
    { name: "helperText", dark: "zinc-400", light: "zinc-500" },
];

export default defaultColorPalette;