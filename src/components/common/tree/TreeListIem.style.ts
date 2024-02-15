import memoize from 'micro-memoize';
import { Theme, calc, styled } from '../../../styled';
import { HBox } from '../layout';

export const createTreeListItemStyle = memoize((theme: Theme) => {
  const Disclosure = styled('button')`
    background: none;
    border: none;
    padding: 0;
    width: ${theme.iconSize.medium};
    height: ${theme.iconSize.medium};
    flex-grow: 0;
    cursor: pointer;
  `;

  const Identity = styled(HBox)`
    color: ${theme.palette.text.default};
    height: ${theme.iconSize.medium};
    flex-grow: 1;
    text-align: left;
    flex-shrink: 1;
    cursor: pointer;
  `;

  const IconPlaceholder = styled('span')`
    display: inline-block;
    width: ${theme.iconSize.medium};
    height: ${theme.iconSize.medium};
  `;

  const MainLayout = styled('div')`
    padding: ${theme.spacing.xSmall};

    &:hover,
    &:focus,
    &.hover {
      &:not(.selected) {
        background-color: ${theme.palette.interactivity.hover};
      }
    }

    &.selected {
      background-color: none;
    }
  `;

  const IconContainer = styled('span')`
    display: inline-block;
    margin-right: ${theme.spacing.small};
  `;

  return {
    Disclosure,
    Identity,
    IconPlaceholder,
    MainLayout,
    IconContainer
  };
});

function getLabelStyledComponentImp(depth: number, theme: Theme) {
  const depthPerUnit = theme.spacing.medium;

  const labelMarginLeft = calc(`${depthPerUnit} * ${depth}`);

  return styled('label')`
    margin-left: ${labelMarginLeft};
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  `;
}

export const getLabelStyledComponent = memoize(getLabelStyledComponentImp, { maxSize: 20 });
