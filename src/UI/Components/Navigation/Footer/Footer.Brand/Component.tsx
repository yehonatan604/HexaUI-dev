import { FooterBrandProps } from "./Props";

const FooterBrand = (props: FooterBrandProps) => {
  const { children, as, to, ...componentProps } = props;
  const Component = as || "a";

  return (
    <Component className="text-xl font-bold" {...componentProps} href={to} to={to}>
      {children}
    </Component>
  );
};

export default FooterBrand;
