import { Meta, StoryObj } from '@storybook/react';
import { breedListMock } from '../../../models/__mocks__/breedListMock';
import { BreedMenu } from './BreedMenu';

const meta: Meta<typeof BreedMenu> = {
  component: BreedMenu
};

export default meta;
type Story = StoryObj<typeof BreedMenu>;

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
