import { TBrand } from "../../../../Data/Types/TBrand";

const FooterBrand = (props: TBrand) => {
  const { children, as, to, ...componentProps } = props;
  const Component = as || "a";

  return (
    <Component className="text-xl font-bold" {...componentProps} href={to} to={to}>
      {children}
    </Component>
  );
};

export default FooterBrand;
