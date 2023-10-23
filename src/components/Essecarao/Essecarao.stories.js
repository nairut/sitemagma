import { Essecarao } from ".";

export default {
  title: "Components/Essecarao",
  component: Essecarao,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    empresaDeTraduOClassName: {},
    empresaDeTraduOClassNameOverride: {},
  },
};
