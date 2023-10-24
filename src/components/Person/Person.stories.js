import { Person } from ".";

export default {
  title: "Components/Person",
  component: Person,
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
    styleOutlined: "/img/style-outlined-9.png",
  },
};
