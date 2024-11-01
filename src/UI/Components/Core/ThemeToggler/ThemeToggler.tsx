import { useEffect, useState } from "react";
import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { TThemeToggler } from "./types/TThemeToggler";

const ThemeToggler = (props: TThemeToggler) => {
  const { darkIcon, lightIcon, className, ...componentProps } = props;
  const [icon, setIcon] = useState<React.ReactNode>(darkIcon);
  const { mode, toggleTheme } = useTheme();

  useEffect(() => {
    if (lightIcon && darkIcon) setIcon(mode === "light" ? darkIcon : lightIcon);
    else {
      if (darkIcon) setIcon(mode === "light" ? darkIcon : "☀️");
      else if (lightIcon) setIcon(mode === "light" ? "🌙" : lightIcon);
      else setIcon(mode === "light" ? "🌙" : "☀️");
    }
  }, [mode, darkIcon, lightIcon]);

  return (
    <button onClick={toggleTheme} {...componentProps} className={`${className}`}>
      {icon}
    </button>
  );
};

export default ThemeToggler;
