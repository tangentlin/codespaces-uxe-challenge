import { Meta, StoryObj } from '@storybook/react';
import { DogBreedTreeItem } from '../../../utils/dogApiUtil';
import { StaticDogCard } from './StaticDogCard';

const meta: Meta<typeof StaticDogCard> = {
  component: StaticDogCard
};

export default meta;
type Story = StoryObj<typeof StaticDogCard>;

const hound: DogBreedTreeItem = {
  id: 'hound',
  label: 'Hound',
  data: {
    breedIds: ['hound']
  }
};

const afghanHound: DogBreedTreeItem = {
  id: 'hound/afghan',
  label: 'Afghan Hound',
  data: {
    breedIds: ['hound', 'afghan']
  }
};

export const Hound: Story = {
  args: {
    breed: hound,
    imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_875.jpg'
  }
};

export const AfghanHound: Story = {
  args: {
    breed: afghanHound,
    imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_875.jpg'
  }
};
