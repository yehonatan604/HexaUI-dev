/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      spacing: {
        "xxs": "0.05rem",
        "xs": "0.15rem",
        "sm": "0.25rem",
        "md": "0.35rem",
        "lg": "0.45rem",
        "xl": "0.55rem",
        "2xl": "0.65rem",
        "3xl": "0.85rem",
        "4xl": "1rem",
      },
      colors: {
        // standard
        "primary": "#5DBCF4",
        "secondary": "#766067",
        "standard": "#ACA5A0",
        "info": "#3797C3",
        "select": "#5B66E1",
        "cancel": "#B81941",
        "approve": "#13AE78",
        "success": "#4FBA4A",
        "warning": "#ECD436",
        "failure": "#CC1E1E",
        "black": "#292929",
        "white": "#EDEDED",

        // light
        "primary-l": "#79CBFB",
        "secondary-l": "#98868C",
        "standard-l": "#DCD6D0",
        "info-l": "#4CAEDC",
        "select-l": "#c44feb",
        "cancel-l": "#D82C57",
        "approve-l": "#23D194",
        "success-l": "#69D463",
        "warning-l": "#FFEA61",
        "failure-l": "#E73636",
        "black-l": "#575757",
        "white-l": "#FFFFFF",

        // dark
        "primary-d": "#4C9AC8",
        "secondary-d": "#5A494F",
        "standard-d": "#827C78",
        "info-d": "#2A7293",
        "select-d": "#3E48B1",
        "cancel-d": "#8F1433",
        "approve-d": "#0D734F",
        "success-d": "#378433",
        "warning-d": "#C3AF2C",
        "failure-d": "#A01818",
        "black-d": "#121212",
        "white-d": "#E2DFDF",
      }
    },
  },
  safelist: [
    {
      pattern: /^(bg|text|border|shadow|ring)-(primary|secondary|standard|info|select|cancel|approve|success|warning|failure|black|white|zinc|gray|stone|blue|red|teal|slate|amber|green|sky)(-[ld])?(-[1-9][0][0]?)?$/,
      variants: ["hover", "focus", "active", "disabled", "checked", "dark"],
    },
    {
      pattern: /^border-(t|r|b|l)-([1-9])/,
      variants: ["hover", "focus", "active", "disabled", "checked", "dark"],
    },
    {
      pattern: /^(p|m)(t|r|b|l|x|y)?-/,
    },
    {
      pattern: /^(w|h)-/,
    },
    {
      pattern: /^rounded(-|$)/,
    },
    {
      pattern: /^flex-(row|col)(-reverse)?$/,
    },
    {
      pattern: /^flex-wrap(-reverse)?$/,
    },
    {
      pattern: /^justify-(start|end|center|between|around|evenly)$/,
    },
    {
      pattern: /^items-(start|end|center|baseline|stretch)$/,
    },
    {
      pattern: /^(top|right|bottom|left)-/,
    },
    {
      pattern: /^(to|from)-/,
    }
  ],
  plugins: [require("@tailwindcss/forms")],
}
