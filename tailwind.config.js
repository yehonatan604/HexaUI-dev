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
      standard: true,

    },
    {
      pattern: /text-.*/,
      standard: true,
    },
    {
      pattern: /border-.*/,
      standard: true,
    },
    {
      pattern: /ring-.*/,
      standard: true,
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
  ],
  plugins: [require("@tailwindcss/forms")],
}
