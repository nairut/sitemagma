import { Chevron } from ".";

export default {
  title: "Components/Chevron",
  component: Chevron,
  argTypes: {
    direction: {
      options: ["down", "up", "right", "left"],
      control: { type: "select" },
    },
    size: {
      options: ["sixteen", "twenty-four", "twenty-eight", "forty-eight", "twenty", "twelve"],
      control: { type: "select" },
    },
    theme: {
      options: ["filled", "regular"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    direction: "down",
    size: "sixteen",
    theme: "filled",
    directionUpSizeClassName: {},
    directionDownSize: "/img/direction-down-size-20-theme-regular.png",
    img: "/img/direction-down-size-16-theme-regular.png",
    directionDownSize1: "/img/direction-down-size-24-theme-regular.png",
  },
};
