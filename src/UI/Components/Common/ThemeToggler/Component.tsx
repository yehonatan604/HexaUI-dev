import { useEffect, useState } from "react";
import useTheme from "../../../../Core/Hooks/useTheme";
import { ThemeTogglerProps } from "./Props";

const ThemeToggler = (props: ThemeTogglerProps) => {
  const { darkIcon, lightIcon, ...componentProps } = props;
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
    <button onClick={toggleTheme} {...componentProps}>
      {icon}
    </button>
  );
};

export default ThemeToggler;
