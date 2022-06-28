import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Core/Button",
  component: Button,
  argTypes: {
    variant: {
      defaultValue: "primary",
      description: "Different variants of button",
      // control: { type: "select" },
      control: { type: "inline-radio" },
    },
    children: {
      defaultValue: "children prop",
      description: "content visible in button",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Main = Template.bind({});
Main.args = {
  children: "Dynamic Children prop",
};
