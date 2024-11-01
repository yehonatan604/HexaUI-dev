import FloatingLabel from "../FloatingLabel";

export default {
  title: "Components/Forms/FloatingLabel",
  component: FloatingLabel,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#292929" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};

export const Default = () => (
  <FloatingLabel label="Email" type="email" className="max-w-md" />
);

export const Custom = () => (
  <FloatingLabel
    label="Username"
    options={{
      labelTextVariant: "text-purple-600",
      ring: {
        variant: "purple",
      },
      helperText: "Enter your username",
    }}
    className="max-w-md"
    innerClassName="border-purple-200"
  />
);

export const Underlined = () => (
  <FloatingLabel
    label="Password"
    type="password"
    options={{
      labelTextVariant: "text-red-500",
      ring: {
        variant: "red",
      },
      helperText: "* Password is required",
      helperTextVariant: "text-red-500",
      type: "underlined",
    }}
    className="max-w-md"
    innerClassName="border-red-300"
  />
);
