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
    expandMoreStyleRound: "/img/expand-more.png",
    expandMoreImg: "/img/expand-more-1.png",
    expandMoreStyleRound1: "/img/expand-more-2.png",
    expandMoreStyleRound2: "/img/expand-more-3.png",
    expandMoreStyleRound3: "/img/expand-more-4.png",
    expandMoreStyleRound4: "/img/expand-more-5.png",
    frameClassName: {},
    divClassName: {},
    expandMoreStyleFilledClassName: {},
    frameClassNameOverride: {},
    divClassNameOverride: {},
    expandMoreStyleFilledClassNameOverride: {},
    frameClassName1: {},
    divClassName1: {},
    expandMoreStyleOutlinedClassName: {},
    frameClassName2: {},
    divClassName2: {},
    expandMoreStyleOutlinedClassNameOverride: {},
    frameClassName3: {},
    divClassName3: {},
    expandMoreStyleRoundClassName: {},
    frameClassName4: {},
    divClassName4: {},
    expandMoreStyleRoundClassNameOverride: {},
  },
};
