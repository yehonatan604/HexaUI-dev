import { TNavbarToggle } from "./types/TNavbarToggle";

const NavbarToggle = (props: TNavbarToggle) => {
  const { children, toggle, ...componentProps } = props;

  const onToggle = () => {
    toggle((prev) => !prev);
  };
  return (
    <button className="md:hidden" {...componentProps} onClick={onToggle}>
      {children}
    </button>
  );
};

export default NavbarToggle;
