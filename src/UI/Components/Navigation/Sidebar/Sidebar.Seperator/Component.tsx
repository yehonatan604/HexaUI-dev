import useColorPalette from "../../../../../Core/Hooks/useColorPallete";
import { TSidebarSeperator } from "../../../../../Data/Types/ComponentTypes/Navigation/Sidebar/TSidebarSeperator";
import Hr from "../../../Typography/Hr/Component";

const SidebarSeperator = (props: TSidebarSeperator) => {
  const { ...componentProps } = props;

  // Hooks
  const { palette } = useColorPalette();

  // JSX
  return (
    <Hr
      options={{
        border: {
          thickness: "5/6",
          variant: palette.standrad,
        },
      }}
      {...componentProps}
    />
  );
};

export default SidebarSeperator;
