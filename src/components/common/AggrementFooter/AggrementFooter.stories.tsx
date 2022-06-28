import { ComponentStory, ComponentMeta } from "@storybook/react";

import AggrementFooter from "./AggrementFooter";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Common/AggrementFooter",
  component: AggrementFooter,
  argTypes: {
    onClose: {
      description: "Click handler when close is clicked",
    },
    onConfirm: {
      description: "Click handler when confirm is clicked",
    },
    positiveText: {
      description: "confirm button text",
    },
    negativeText: {
      description: "close button text",
    },
    errorText: {
      description: "error message display",
    },
  },
} as ComponentMeta<typeof AggrementFooter>;

const Template: ComponentStory<typeof AggrementFooter> = (args) => (
  <AggrementFooter {...args} />
);

export const Main = Template.bind({});
Main.args = {
  positiveText: "confirm",
  negativeText: "close",
};
