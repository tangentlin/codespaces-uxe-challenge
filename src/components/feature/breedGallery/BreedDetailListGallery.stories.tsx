import { Meta, StoryObj } from '@storybook/react';
import { DogBreedTreeItem } from '../../../utils/dogApiUtil';
import { BreedDetailListGallery } from './BreedDetailListGallery';

const meta: Meta<typeof BreedDetailListGallery> = {
  component: BreedDetailListGallery
};

export default meta;
type Story = StoryObj<typeof BreedDetailListGallery>;

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
    breed: hound
  }
};

export const AfghanHound: Story = {
  args: {
    breed: afghanHound
  }
};
