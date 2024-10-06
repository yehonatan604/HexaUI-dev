import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { Gi3dGlasses, Gi3dHammer, Gi3dMeeple } from "react-icons/gi";
import Sidebar from "../Navigation/Sidebar/Component";

const SidebarExample = () => {
  return (
    <Sidebar>
      <Sidebar.Header placement={FlexTypes.Start}>
        <h1 className="text-xl font-serif">Menu</h1>
      </Sidebar.Header>
      <Sidebar.Item icon={<Gi3dGlasses />}>Menu Item 1</Sidebar.Item>
      <Sidebar.Item icon={<Gi3dGlasses />}>Menu Item 2</Sidebar.Item>
      <Sidebar.Item icon={<Gi3dGlasses />}>Menu Item 3</Sidebar.Item>
      <Sidebar.Item label="new!" icon={<Gi3dGlasses />}>
        Menu Item 4
      </Sidebar.Item>
      <Sidebar.Seperator />
      <Sidebar.Item icon={<Gi3dHammer />}>Menu Item 5</Sidebar.Item>
      <Sidebar.Item icon={<Gi3dHammer />}>Menu Item 6</Sidebar.Item>
      <Sidebar.Item icon={<Gi3dHammer />}>Menu Item 7</Sidebar.Item>
      <Sidebar.Seperator />
      <Sidebar.Item icon={<Gi3dMeeple />}>Menu Item 8</Sidebar.Item>
      <Sidebar.Item icon={<Gi3dMeeple />}>Menu Item 9</Sidebar.Item>
      <Sidebar.Item icon={<Gi3dMeeple />}>Menu Item 10</Sidebar.Item>
      <Sidebar.Seperator />
      <Sidebar.Item>Menu Item 11</Sidebar.Item>
      <Sidebar.Item>Menu Item 12</Sidebar.Item>
      <Sidebar.Item>Menu Item 13</Sidebar.Item>
    </Sidebar>
  );
};

export default SidebarExample;
