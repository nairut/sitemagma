import { ExpandMore } from ".";

export default {
  title: "Components/ExpandMore",
  component: ExpandMore,
  argTypes: {
    style: {
      options: ["round", "sharp", "filled", "two-tone", "outlined"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "round",
    className: {},
    styleRound: "/img/style-round-8.png",
  },
};
