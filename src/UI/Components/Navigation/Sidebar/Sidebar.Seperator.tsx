import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { TSidebarSeperator } from "./types/TSidebarSeperator";
import Hr from "../../Typography/Hr/Hr";

const SidebarSeperator = (props: TSidebarSeperator) => {
  const { ...componentProps } = props;

  // Hooks
  const { colors } = useTheme();

  // JSX
  return (
    <Hr
      options={{
        border: {
          thickness: "5/6",
          variant: colors.standrad,
        },
      }}
      {...componentProps}
    />
  );
};

export default SidebarSeperator;
