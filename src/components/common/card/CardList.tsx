import * as React from 'react';
import { useTheme } from '../../../styled';
import { getSizedArray } from '../../../utils/listUtil';
import { createCardListStyle, getListSizeVariation, getLoadingListPlaceholderCount } from './CardList.style';
import { ImageCard } from './ImageCard';
import { ImageCardSize } from './types';

export interface RenderItemProps<T> {
  item: T;
  size: ImageCardSize;
  onSelected?: (item: T) => void;
  index: number;
}

export interface CardListProps<T> {
  isLoading?: boolean;
  items: readonly T[];
  renderItem: (props: RenderItemProps<T>) => JSX.Element;
  /**
   * Get the unique key for the item
   * @param item
   * @returns
   */
  itemKey: (item: T) => string;
  onSelected?: (item: T) => void;
  listLayoutClassName?: string;
}

export function CardList<T>(props: CardListProps<T>) {
  const { isLoading = false, items, renderItem, itemKey, onSelected } = props;
  const { theme } = useTheme();
  const { MainLayout, LargeListLayout, SmallListLayout } = createCardListStyle(theme);

  const spaceWidth = 700;
  const spaceHeight = 1000;
  const { list: listSize, item: itemSize } = getListSizeVariation(spaceWidth, spaceHeight);

  const isSmall = listSize === 'small';
  const ListLayout = isSmall ? SmallListLayout : LargeListLayout;

  if (isLoading) {
    const placeholderCount = getLoadingListPlaceholderCount(listSize);
    return (
      <MainLayout>
        <ListLayout className={props.listLayoutClassName}>
          {getSizedArray(placeholderCount, 0).map((_, index) => (
            <ImageCard key={index} size={itemSize} name="" isLoading={true} />
          ))}
        </ListLayout>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ListLayout className={props.listLayoutClassName}>
        {items.map((item, index) => (
          <React.Fragment key={itemKey(item)}>
            {renderItem({
              item,
              size: itemSize,
              onSelected,
              index
            })}
          </React.Fragment>
        ))}
      </ListLayout>
    </MainLayout>
  );
}
