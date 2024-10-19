import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { Gi3dGlasses, Gi3dMeeple, GiDaisy } from "react-icons/gi";
import Sidebar from "../Sidebar";
import Flex from "../../../Layout/Flex/Flex";
import { HiArrowCircleRight } from "react-icons/hi";
import useTheme from "../../../../../Core/Context/ThemeContext/hooks/useTheme";
import { TBorder } from "../../../../../Data/Types/TBorder";
import { TSidebarOptions } from "../types/TSidebarOptions";
import { TSidebarHeaderOptions } from "../types/TSidebarHeaderOptions";
import { TSidebarItemOptions } from "../types/TSidebarItemOptions";

const SidebarExample = () => {
  // Hooks
  const { colors } = useTheme();

  // Options
  const borderOptions = {
    variant: colors.standradDark,
    thickness: "2",
  } as TBorder;

  // Sidebar 1 Options
  const sidebar1Options = {
    border: borderOptions,
  };

  const sidebar1ItemOptions = {
    textVariant: colors.whiteLight,
    hoverBgVariant: colors.info,
    hoverTextVariant: colors.infoLight,
    disableOpacityOnHover: true,
    labelBgVariant: "slate-800",
    labelVariant: colors.warning,
  } as TSidebarItemOptions;

  // Sidebar 2 Options
  const sidebar2Options = {
    bgVariant: colors.blackLight,
    border: borderOptions,
  } as TSidebarOptions;

  const sidebar2ItemOptions = {
    textVariant: colors.white,
    hoverBgVariant: colors.black,
    disableOpacityOnHover: true,
    labelBgVariant: "slate-800",
    labelVariant: "slate-200",
  } as TSidebarItemOptions;

  const sidebar2HeaderOptions = {
    bgVariant: colors.infoDark,
    textVariant: colors.infoLight,
    placement: FlexTypes.Center,
  } as TSidebarHeaderOptions;

  // Sidebar 3 Options
  const sidebar3Options = {
    bgVariant: colors.white,
    border: borderOptions,
  } as TSidebarOptions;

  const sidebar3ItemOptions = {
    textVariant: colors.blackLight,
    hoverBgVariant: colors.primaryLight,
    disableOpacityOnHover: true,
    labelBgVariant: colors.info,
    labelVariant: colors.black,
  } as TSidebarItemOptions;

  const sidebar3HeaderOptions = {
    bgVariant: colors.primaryLight,
    textVariant: colors.blackLight,
    placement: FlexTypes.Start,
  } as TSidebarHeaderOptions;

  // Sidebar 4 Options
  const sidebar4Options = {
    bgVariant: colors.standradLight,
    disableClose: true,
  } as TSidebarOptions;

  const sidebar4ItemOptions = {
    textVariant: colors.blackLight,
    labelBgVariant: colors.primaryDark,
    labelVariant: colors.warning,
  } as TSidebarItemOptions;

  const sidebar4HeaderOptions = {
    bgVariant: colors.blackLight,
    textVariant: colors.infoLight,
    placement: FlexTypes.Center,
  } as TSidebarHeaderOptions;

  //Constants
  const itemsArr = ["Menu Item", "Menu Item", "Menu Item"];

  // JSX
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Start,
      }}
      className="w-5/6 gap-10 mb-10 mt-5"
    >
      {/* Sidebar 1 */}
      <Sidebar options={sidebar1Options}>
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
      <Sidebar options={sidebar2Options}>
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
      <Sidebar chevron={HiArrowCircleRight} options={sidebar3Options}>
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
      <Sidebar options={sidebar4Options}>
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
