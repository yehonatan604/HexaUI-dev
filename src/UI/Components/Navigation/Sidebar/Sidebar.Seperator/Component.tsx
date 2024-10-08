import useTheme from "../../../../../Core/Hooks/useTheme";
import { TSidebarSeperator } from "../../../../../Data/Types/ComponentTypes/Navigation/Sidebar/TSidebarSeperator";
import Hr from "../../../Typography/Hr/Component";

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
