import { FaleComUm } from ".";

export default {
  title: "Components/FaleComUm",
  component: FaleComUm,
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
  },
};
