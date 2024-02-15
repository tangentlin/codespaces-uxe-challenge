import { Meta, StoryObj } from '@storybook/react';
import ChevronUpIcon from './ChevronUp';
import DogIcon from './Dog';
import { Icon } from './Icon';
import dog from './svgs/dog.svg?react';

const meta: Meta<typeof Icon> = {
  component: Icon
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: dog
  }
};

export const Dog = () => <DogIcon />;
export const ChevronUp = () => <ChevronUpIcon />;
