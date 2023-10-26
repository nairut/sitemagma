import { Menu } from ".";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    expandMoreStyleRound: "/img/expand-more-8.png",
    expandMoreImg: "/img/expand-more-9.png",
    expandMoreStyleRound1: "/img/expand-more-10.png",
    expandMoreStyleRound2: "/img/expand-more-11.png",
    expandMoreStyleRound3: "/img/expand-more-12.png",
    expandMoreStyleRound4: "/img/expand-more-13.png",
  },
};
