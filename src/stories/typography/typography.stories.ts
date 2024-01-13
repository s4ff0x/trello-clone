import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/shared/ui";
const meta: Meta<typeof Typography> = {
  title: "Example/Typography",
  component: Typography,
  // ...
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "sm",
    weight: "medium",
    children: "Typography",
  },
};
