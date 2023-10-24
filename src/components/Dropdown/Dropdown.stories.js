import { Dropdown } from ".";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    appearance: {
      options: ["fill-lighter", "fill-darker", "outline", "transparent"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    theme: {
      options: ["light-mode", "dark-mode"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    headers: true,
    divider: false,
    appearance: "fill-lighter",
    size: "large",
    theme: "light-mode",
    expanded: true,
    className: {},
    inputClassName: {},
    contentsClassName: {},
    divClassName: {},
    text: "Placeholder text",
    chevronDirectionDownSize: "/img/icon-end-1-medium.png",
    thinUnderlineClassName: {},
    inputType: "text",
  },
};
