import { Meta, StoryObj } from '@storybook/react';
import Dog from '../icon/Dog';
import { VBox } from '../layout';
import { TreeListItem } from './TreeListItem';
import { InternalTreeItem } from './models/TreeItem';

const meta: Meta<typeof TreeListItem> = {
  component: TreeListItem
};

export default meta;
type Story = StoryObj<typeof TreeListItem>;

const level1: InternalTreeItem = {
  id: '1',
  depth: 0,
  data: {
    id: '1',
    label: 'Level 1',
    data: {}
  },
  children: [
    {
      id: '1.1',
      depth: 1,
      data: {
        id: '1.1',
        label: 'Level 1.1',
        data: {}
      }
    }
  ]
};

const level2: InternalTreeItem = {
  id: '2',
  depth: 1,
  data: {
    id: '2',
    label: 'Level 2',
    data: {}
  },
  children: [
    {
      id: '2.1',
      depth: 2,
      data: {
        id: '2.1',
        label: 'Level 2.1',
        data: {}
      }
    }
  ]
};

const level3: InternalTreeItem = {
  id: '3',
  depth: 2,
  data: {
    id: '3',
    label: 'Level 3',
    data: {}
  }
};

const longLabel: InternalTreeItem = {
  id: '3.1',
  depth: 2,
  data: {
    id: '3.1',
    label: 'This is a very long label that should be truncated',
    data: {}
  }
};

export const AllVariants = () => (
  <div style={{ width: '200px' }}>
    <VBox gap="xLarge">
      <VBox>
        <label>Without icon</label>
        <TreeListItem data={level1} />
        <TreeListItem data={level2} />
        <TreeListItem data={level3} />
      </VBox>

      <VBox>
        <label>With icon</label>
        <TreeListItem icon={Dog} selected data={level1} />
        <TreeListItem icon={Dog} data={level2} />
        <TreeListItem icon={Dog} data={level3} />
        <TreeListItem icon={Dog} data={longLabel} />
      </VBox>
    </VBox>
  </div>
);
