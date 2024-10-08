/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-.*/,
      variants: ["hover", "focus", "active", "disabled", "dark", "checked"],
      standard: true,
    },
    {
      pattern: /text-.*/,
      variants: ["hover", "focus", "active", "disabled", "dark", "checked"],
      standard: true,
    },
    {
      pattern: /border-.*/,
      standard: true,
    },
    {
      pattern: /ring-.*/,
      standard: true,
      variants: ["hover", "focus", "active", "disabled", "dark", "checked"],
    },
    {
      pattern: /shadow-.*/,
      standard: true,
    },
    {
      pattern: /p-.*/,
      standard: true,
    },
    {
      pattern: /m-.*/,
      standard: true,
    },
    {
      pattern: /w-.*/,
      standard: true,
    },
    {
      pattern: /h-.*/,
      standard: true,
    },
    {
      pattern: /flex-.*/,
      standard: true,
    },
    {
      pattern: /justify-.*/,
      standard: true,
    },
    {
      pattern: /items-.*/,
      standard: true,
    },
  ],
  plugins: [require("@tailwindcss/forms")],
}
