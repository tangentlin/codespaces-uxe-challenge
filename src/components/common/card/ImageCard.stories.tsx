import { Meta, StoryObj } from '@storybook/react';
import { ImageCard } from './ImageCard';

const meta: Meta<typeof ImageCard> = {
  component: ImageCard
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

export const SmallLoading: Story = {
  args: {
    isLoading: true,
    size: 'small'
  }
};

export const LargeLoading: Story = {
  args: {
    isLoading: true,
    size: 'large'
  }
};

export const SmallImage: Story = {
  args: {
    isLoading: false,
    size: 'small',
    imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_875.jpg',
    name: 'Afghan Hound'
  }
};

export const LargeImage: Story = {
  args: {
    isLoading: false,
    size: 'large',
    imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_875.jpg',
    name: 'Afghan Hound'
  }
};
