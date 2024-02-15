import { Meta, StoryObj } from '@storybook/react';
import { breedListMock } from '../../models/__mocks__/breedListMock';
import { allDogId } from '../../models/dto';
import { BreedList } from '../breedList/BreedList';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  component: Navigation
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default = () => (
  <div style={{ width: '290px', height: '90vh' }}>
    <Navigation>
      <BreedList breeds={breedListMock} defaultExpandedIds={new Set(allDogId)} />
    </Navigation>
  </div>
);
