import type { Preview } from "@storybook/react";

export const globals = {
  backgrounds: {
    grid: true,
  },
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark', // Set dark background as default
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    }
  },
};

export default preview;
