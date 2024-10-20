import { TSidebarSeperator } from "./types/TSidebarSeperator";
import Hr from "../../Typography/Hr/Hr";

const SidebarSeperator = (props: TSidebarSeperator) => {
  const { ...componentProps } = props;

  // JSX
  return (
    <Hr
      options={{
        border: {
          thickness: "5/6",
          variant: "standard",
        },
      }}
      {...componentProps}
    />
  );
};

export default SidebarSeperator;
