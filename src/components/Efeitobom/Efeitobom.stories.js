import { Efeitobom } from ".";

export default {
  title: "Components/Efeitobom",
  component: Efeitobom,
  argTypes: {
    property1: {
      options: ["dois", "tres", "cinco", "quatro", "um"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "dois",
    className: {},
  },
};
