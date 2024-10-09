# React Hexa UI

**React Hexa UI** is a modern, flexible, and lightweight React component library built with Vite and styled with Tailwind CSS. It offers a wide range of customizable and reusable components that simplify UI development for your React applications.

## Features

- 🚀 **Fast and Lightweight:** Developed with Vite, ensuring high performance and fast builds.
- 🎨 **Tailwind CSS Integration:** Styled with Tailwind CSS for utility-first, responsive design out of the box.
- ⚙️ **Highly Customizable:** Modify styles easily with Tailwind classes, extend themes, or use component-specific variants and themes.
- 📚 **Developer Friendly:** Intuitive API, comprehensive documentation, and live examples.
- 🛠️ **Built for Scalability:** Suited for projects of any size—from small apps to large-scale applications.

## Installation

<hr/>

### step 1: install **_React Hexa UI_** via **NPM**:

To get started with React Hexa UI, install the library via npm:

```bash
npm install react-hexa@latest
```

### step 2: Install **_Tailwind CSS_** **(Required)**

React Hexa UI is built with Tailwind CSS, you need to set up Tailwind in your project. Here's how to install Tailwind CSS with Vite and React:

1. Install Tailwind CSS and its peer dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Initialize Tailwind by creating the default configuration files:

```bash
npx tailwindcss init -p
```

3. Configure **_tailwind.config.js_** to include all of your React files and components by adding this content:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. Add the Tailwind directives to your CSS file **_(e.g., src/main.css)_**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### step 3: Import **_Rainbow Plus UI_**'s CSS

After setting up Tailwind, ensure that you import React Hexa UI’s CSS into your project. This CSS is necessary to apply the library's default styles.

In your main application file **_(e.g., src/main.jsx or src/main.tsx)_**, add the following import:

```js
import "react-hexa/css";
```

## Usage

Once installed, you can start using the components by importing them into your project. Here's a quick example of how to use the Button component:

```js
import { Flex, Button } from "react-hexa";

function App() {
  return (
    <Flex className="gap-4">
      <Button options={{ bgVariant: "success" }}>Ok</Button>
      <Button options={{ bgVariant: "failure" }}>Cancel</Button>
    </Flex>
  );
}

export default App;
```

<p align="center">
  <img src="https://i.postimg.cc/vBWQVFLC/btns-new.png" alt="Button Example">
</p>

## Customization

React Hexa UI components are built with Tailwind CSS at their core, offering extensive customization options to match your project’s needs:

- Utility Classes: Override component styles on the fly by passing in your own Tailwind utility classes.

- Theme Extension: Customize your entire application by extending Tailwind's configuration to introduce your own design tokens.

- Variants: Use built-in component variants to apply predefined styles consistently across your app.

- Component Themes: For more advanced styling, override the default component themes to enforce a cohesive design language throughout your project.

```js
import { useTheme, List, ListStyleTypes, Sizes } from "react-hexa";

function App() {
  const { colors } = useTheme();

  const listOptions = {
    items: ["item 1", "item 2", "item 3"],
    textVariant: colors.Primary,
    listStyle: ListStyleTypes.Decimal,
    fontSize: Sizes.Sm,
    gap: 1,
  };

  return <List options={listOptions} />;
}

export default App;
```

<p align="center">
  <img src="https://i.postimg.cc/3x0Cc1YT/list-light.png" alt="Styling Example">
</p>

## Documentation

For detailed documentation, usage examples, and a complete list of components, please visit the Rainbow Plus UI Documentation.

## License

Rainbow Plus UI is licensed under the MIT License. See the LICENSE file for more information.
