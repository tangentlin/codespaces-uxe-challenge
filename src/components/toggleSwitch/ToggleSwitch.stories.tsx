import { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitch } from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  component: ToggleSwitch
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    label: 'Toggle Switch'
  }
};
