import { createContext } from "react";

export type ThemeContextType = {
  mode: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: localStorage.getItem("theme-mode") || "light",
  toggleTheme: () => { },
});

export { ThemeContext };
