import { NavbarToggleProps } from "./Props";

const NavbarToggle = (props: NavbarToggleProps) => {
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
