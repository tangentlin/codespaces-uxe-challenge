import memoize from 'micro-memoize';
import { Theme, calc, styled } from '../../../styled';

export const createTreeStyle = memoize((theme: Theme) => {
  const FauxItem = styled('div')`
    display: flex;
    height: ${calc(theme.iconSize.medium, theme.spacing.xSmall, theme.spacing.xSmall)};
  `;

  return {
    FauxItem
  };
});
