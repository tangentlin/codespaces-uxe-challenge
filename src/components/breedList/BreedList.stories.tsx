import { Meta, StoryObj } from '@storybook/react';
import { breedListMock } from '../../models/__mocks__/breedListMock';
import { BreedList } from './BreedList';

const meta: Meta<typeof BreedList> = {
  component: BreedList
};

export default meta;
type Story = StoryObj<typeof BreedList>;

export const List: Story = {
  args: {
    breeds: breedListMock
  }
};

export const Loading: Story = {
  args: {
    breeds: breedListMock,
    isLoading: true
  }
};
