import { FC, useCallback } from 'react';
import { useTheme } from '../../styled';
import { IconComponentType } from '../icon/types';
import { VBox } from '../layout';
import { Skeleton } from '../skeleton/Skeleton';
import { createTreeStyle } from './Tree.style';
import { TreeListItem } from './TreeListItem';
import { InternalTreeItem, TreeItem } from './models/TreeItem';
import { useTree } from './useTree';

export interface TreePropsBase {
  defaultSelectedId?: string;
  defaultExpandedIds?: Set<string>;
  icon?: IconComponentType;
  iconAltText?: string;
  /**
   * Number of faux items to display while loading
   */
  loadingFauxItems?: number;
  onSelect?: (item?: TreeItem) => void;
}

export interface TreeLoadingProps extends TreePropsBase {
  isLoading: true;
  items?: readonly TreeItem[];
}

export interface TreeLoadedProps extends TreePropsBase {
  isLoading?: false;
  items: readonly TreeItem[];
}

export type TreeProps = TreeLoadingProps | TreeLoadedProps;

// TODO: Add virtualization for better performance on larger tree
export const Tree: FC<TreeProps> = (props) => {
  const { items, defaultSelectedId, defaultExpandedIds, onSelect, icon, loadingFauxItems = 10, isLoading } = props;
  const { visibleItems, toggle, select, selected, expandedIds } = useTree(items, defaultSelectedId, defaultExpandedIds);
  const { theme } = useTheme();
  const { FauxItem } = createTreeStyle(theme);

  const item_onSelect = useCallback(
    (item: InternalTreeItem<TreeItem>) => {
      select(item.id);
      onSelect?.(item.data);
    },
    [onSelect, select]
  );

  const item_onToggleExpand = useCallback(
    (item: InternalTreeItem<TreeItem>) => {
      toggle(item.id);
    },
    [toggle]
  );

  if (isLoading) {
    return (
      <VBox gap="medium">
        {Array(loadingFauxItems)
          .fill(0)
          .map((_, index) => (
            <FauxItem key={index}>
              <Skeleton />
            </FauxItem>
          ))}
      </VBox>
    );
  }

  return (
    <VBox gap="medium">
      {visibleItems.map((item) => (
        <TreeListItem
          key={item.id}
          icon={icon}
          iconAltText={item.data.label}
          data={item}
          expanded={expandedIds.has(item.id)}
          selected={item.id === selected?.id}
          onSelect={item_onSelect}
          onToggleExpand={item_onToggleExpand}
        />
      ))}
    </VBox>
  );
};
