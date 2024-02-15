import { Meta, StoryObj } from '@storybook/react';
import { breedListMock } from '../../models/__mocks__/breedListMock';
import { breedListToTreeItemList } from '../../utils/dogApiUtil';
import Dog from '../icon/Dog';
import { Tree } from './Tree';
import { TreeItem } from './models/TreeItem';

const meta: Meta<typeof Tree> = {
  component: Tree
};

export default meta;
type Story = StoryObj<typeof Tree>;

const dogBreed: TreeItem = {
  id: 'dog',
  label: 'Dog',
  data: {}
};

const dogBreedItems = breedListToTreeItemList(breedListMock);
dogBreed.children = dogBreedItems;

export const Default: Story = {
  args: {
    items: [dogBreed],
    icon: Dog
  }
};

export const Loading: Story = {
  args: {
    items: [dogBreed],
    icon: Dog,
    isLoading: true
  }
};
