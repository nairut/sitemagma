import { ContatoRapido } from ".";

export default {
  title: "Components/ContatoRapido",
  component: ContatoRapido,
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
    text: "Orçamento Rapido",
    contatoRapidoClassName: {},
  },
};
