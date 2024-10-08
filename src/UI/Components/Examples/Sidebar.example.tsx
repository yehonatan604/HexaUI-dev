import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { Gi3dGlasses, Gi3dMeeple, GiDaisy } from "react-icons/gi";
import Sidebar from "../Navigation/Sidebar/Component";
import Flex from "../Layout/Flex/Component";
import useColorPalette from "../../../Core/Hooks/useColorPallete";
import { SidebarItemOptions } from "../../../Data/Types/ComponentTypes/Navigation/Sidebar/TSidebarItem";
import { SidebarHeaderOptions } from "../../../Data/Types/ComponentTypes/Navigation/Sidebar/TSidebarHeader";
import { HiArrowCircleRight } from "react-icons/hi";

const SidebarExample = () => {
  // Hooks
  const { palette } = useColorPalette();

  // Options
  const sidebar1ItemOptions = {
    textVariant: palette.whiteLight,
    hoverBgVariant: palette.info,
    hoverTextVariant: palette.infoLight,
    disableOpacityOnHover: true,
    labelBgVariant: "slate-800",
    labelVariant: "slate-200",
  } as SidebarItemOptions;

  const sidebar2ItemOptions = {
    textVariant: palette.white,
    hoverBgVariant: palette.black,
    disableOpacityOnHover: true,
    labelBgVariant: "slate-800",
    labelVariant: "slate-200",
  } as SidebarItemOptions;

  const sidebar3ItemOptions = {
    textVariant: palette.blackLight,
    hoverBgVariant: palette.primaryLight,
    disableOpacityOnHover: true,
    labelBgVariant: palette.info,
    labelVariant: palette.black,
  } as SidebarItemOptions;

  const sidebar4ItemOptions = {
    textVariant: palette.blackLight,
    labelBgVariant: palette.info,
    labelVariant: palette.black,
  } as SidebarItemOptions;

  const sidebar2HeaderOptions = {
    bgVariant: palette.infoDark,
    textVariant: palette.infoLight,
    placement: FlexTypes.Start,
  } as SidebarHeaderOptions;

  const sidebar3HeaderOptions = {
    bgVariant: palette.primaryLight,
    textVariant: palette.blackLight,
    placement: FlexTypes.Start,
  } as SidebarHeaderOptions;

  const sidebar4HeaderOptions = {
    bgVariant: palette.blackLight,
    textVariant: palette.infoLight,
  } as SidebarHeaderOptions;

  //Constants
  const itemsArr = ["Menu Item", "Menu Item", "Menu Item"];

  // JSX
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Start,
      }}
      className="w-[99vw] gap-4 mb-10 mt-5"
    >
      {/* Sidebar 1 */}
      <Sidebar>
        <Sidebar.Header options={{ placement: FlexTypes.Start }}>
          <h1 className="text-xl font-serif">Menu</h1>
        </Sidebar.Header>
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item
              key={index}
              options={sidebar1ItemOptions}
              icon={<Gi3dGlasses />}
            >
              {item}
            </Sidebar.Item>
          );
        })}
        <Sidebar.Item label="new!" options={sidebar1ItemOptions} icon={<Gi3dGlasses />}>
          Menu Item
        </Sidebar.Item>
        <Sidebar.Seperator />
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item key={index} icon={<Gi3dMeeple />} options={sidebar1ItemOptions}>
              {item}
            </Sidebar.Item>
          );
        })}
        <Sidebar.Seperator />
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item key={index} icon={<GiDaisy />} options={sidebar1ItemOptions}>
              {item}
            </Sidebar.Item>
          );
        })}
      </Sidebar>

      {/* Sidebar 2 */}
      <Sidebar options={{ bgVariant: palette.blackLight }}>
        <Sidebar.Header options={sidebar2HeaderOptions}>
          <h1 className="text-xl font-serif">Menu</h1>
        </Sidebar.Header>
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item
              key={index}
              options={sidebar2ItemOptions}
              icon={<Gi3dGlasses />}
            >
              {item}
            </Sidebar.Item>
          );
        })}
        <Sidebar.Item label="new!" options={sidebar2ItemOptions} icon={<Gi3dGlasses />}>
          Menu Item
        </Sidebar.Item>
        <Sidebar.Seperator />
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item key={index} icon={<Gi3dMeeple />} options={sidebar2ItemOptions}>
              {item}
            </Sidebar.Item>
          );
        })}
        <Sidebar.Seperator />
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item key={index} icon={<GiDaisy />} options={sidebar2ItemOptions}>
              {item}
            </Sidebar.Item>
          );
        })}
      </Sidebar>

      {/* Sidebar 3 */}
      <Sidebar chevron={HiArrowCircleRight} options={{ bgVariant: palette.white }}>
        <Sidebar.Header options={sidebar3HeaderOptions}>
          <h1 className="text-xl font-serif">Menu</h1>
        </Sidebar.Header>
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item
              key={index}
              options={sidebar3ItemOptions}
              icon={<Gi3dGlasses />}
            >
              {item}
            </Sidebar.Item>
          );
        })}
        <Sidebar.Item label="new!" options={sidebar3ItemOptions} icon={<Gi3dGlasses />}>
          Menu Item
        </Sidebar.Item>
        <Sidebar.Seperator />
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item key={index} icon={<Gi3dMeeple />} options={sidebar3ItemOptions}>
              {item}
            </Sidebar.Item>
          );
        })}
        <Sidebar.Seperator />
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item key={index} icon={<GiDaisy />} options={sidebar3ItemOptions}>
              {item}
            </Sidebar.Item>
          );
        })}
      </Sidebar>

      {/* Sidebar 4 */}
      <Sidebar options={{ bgVariant: palette.infoLight, disableClose: true }}>
        <Sidebar.Header options={sidebar4HeaderOptions}>
          <h1 className="text-xl font-serif">Menu</h1>
        </Sidebar.Header>
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item
              key={index}
              options={sidebar4ItemOptions}
              icon={<Gi3dGlasses />}
            >
              {item}
            </Sidebar.Item>
          );
        })}
        <Sidebar.Item label="new!" options={sidebar4ItemOptions} icon={<Gi3dGlasses />}>
          Menu Item
        </Sidebar.Item>
        <Sidebar.Seperator />
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item key={index} icon={<Gi3dMeeple />} options={sidebar4ItemOptions}>
              {item}
            </Sidebar.Item>
          );
        })}
        <Sidebar.Seperator />
        {itemsArr.map((item, index) => {
          return (
            <Sidebar.Item key={index} icon={<GiDaisy />} options={sidebar4ItemOptions}>
              {item}
            </Sidebar.Item>
          );
        })}
      </Sidebar>
    </Flex>
  );
};

export default SidebarExample;
