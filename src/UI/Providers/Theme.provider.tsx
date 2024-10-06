import { ThemeContext } from "../../Core/Context/Theme.context";
import { useState, useEffect } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme-mode", mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme-mode");
    if (localTheme) {
      setMode(localTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
