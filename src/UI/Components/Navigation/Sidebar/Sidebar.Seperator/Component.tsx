import Hr from "../../../Typography/Hr/Component";
import { SidebarSeperatorProps } from "./Props";

const SidebarSeperator = (props: SidebarSeperatorProps) => {
  const { ...componentProps } = props;
  return <Hr borderWidth="w-5/6" borderColor="border-zinc-500" {...componentProps} />;
};

export default SidebarSeperator;
