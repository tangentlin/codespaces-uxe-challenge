import memoize from 'micro-memoize';
import { Theme, styled } from '../../../styled';
import { CardListSize, CardListVariation, ImageCardSize } from './types';

export const createCardListStyle = memoize((theme: Theme) => {
  const sizeVariation: CardListVariation = {
    // Small variation is not depicted in the supplied Figma, so the value is arbitrary
    // https://www.figma.com/file/4BTnykXSgsFca3qXLjmRam/Who-let-the-dogs-out%3F-(Principal)
    small: {
      columnGap: theme.spacing.large,
      rowGap: theme.spacing.large
    },
    large: {
      columnGap: theme.spacing.xLarge,
      rowGap: theme.spacing.xLarge
    }
  };

  const ListLayout = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const SmallListLayout = styled(ListLayout)`
    column-gap: ${sizeVariation.small.columnGap};
    row-gap: ${sizeVariation.small.rowGap};
  `;

  const LargeListLayout = styled(ListLayout)`
    column-gap: ${sizeVariation.large.columnGap};
    row-gap: ${sizeVariation.large.rowGap};
  `;

  const MainLayout = styled('div')`
    overflow: auto;
    width: 100%;
    height: 100%;
  `;

  return {
    SmallListLayout,
    LargeListLayout,
    MainLayout
  };
});

export interface GetListSizeVariationReturn {
  /**
   * The size of the card list
   */
  list: CardListSize;

  /**
   * The size of individual the card item
   */
  item: ImageCardSize;
}

/**
 * Get card list size variation based on width and height
 * @param width
 * @param height
 * @returns
 */
export function getListSizeVariation(width: number, height: number): GetListSizeVariationReturn {
  // TODO: Implement this function
  return { list: 'large', item: 'large' };
}

/**
 * Get the number of placeholder items to display while loading
 * @param listSize
 * @returns
 */
export function getLoadingListPlaceholderCount(listSize: string) {
  // TODO: Implement this function
  return 12;
}
