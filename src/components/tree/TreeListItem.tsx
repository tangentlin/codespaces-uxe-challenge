import memoize from 'micro-memoize';
import { HTMLAttributes } from 'react';
import { Theme, calc, styled, useTheme } from '../../styled';
import { ChevronUp } from '../icon/Icon.stories';
import { IconComponentType } from '../icon/types';
import { HBox } from '../layout';
import { InternalTreeItem } from './models/TreeItem';

export interface TreeListItemProps {
  icon?: IconComponentType;
  iconAltText?: string;
  data: InternalTreeItem;
  expanded?: boolean;
  selected?: boolean;
  onToggleExpand?: (data: InternalTreeItem) => void;
  onSelect?: (data: InternalTreeItem) => void;
}

const MainLayout = styled('div')(
  (theme: Theme) => `
    padding: ${theme.spacing.xSmall};
`
);

const IconContainer = styled<HTMLAttributes<{}>>('span')(
  (theme: Theme) => `
    display: inline-block;
    margin-right: ${theme.spacing.small};
`
);

const IconPlaceholder = styled('span')(
  (theme: Theme) => `
    display: inline-block;
    width: ${theme.iconSize.medium};
    height: ${theme.iconSize.medium};
`
);

const Identity = styled(HBox)(
  // Use icon size as height so the tree line item has the same height regardless of the icon presence
  (theme: Theme) => `
    color: ${theme.palette.text.default};
    height: ${theme.iconSize.medium};
    flex-grow: 1;
    text-align: left;
    flex-shrink: 1;
`
);

const Disclosure = styled<HTMLAttributes<{}>>('button')(
  // Use icon size as height so the tree line item has the same height regardless of the icon presence
  (theme: Theme) => `
    background: none;
    border: none;
    outline: none;
    padding: 0;
    width: ${theme.iconSize.medium};
    height: ${theme.iconSize.medium};
    flex-grow: 0;
`
);

function getLabelStyledComponentImp(depth: number, theme: Theme) {
  const depthPerUnit = theme.spacing.medium;

  const labelMarginLeft = calc(`${depthPerUnit} * ${depth}`);

  return styled<HTMLAttributes<HTMLLabelElement>>('label')`
    margin-left: ${labelMarginLeft};
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
}

const getLabelStyledComponent = memoize(getLabelStyledComponentImp, { maxSize: 20 });

export const TreeListItem: React.FC<TreeListItemProps> = (props) => {
  // For simplicity, icon is only shown when item is selected
  const { icon: Icon, iconAltText, data, expanded = false, selected = false, onToggleExpand, onSelect } = props;
  const { theme } = useTheme();

  const hasIcon = Icon != null;
  const showIcon = selected && hasIcon;
  const hasChildren = data.children != null && data.children.length > 0;

  const Label = getLabelStyledComponent(data.depth, theme);

  const identity_onClick = (e: React.MouseEvent) => {
    // e.preventDefault();
    console.log('identity_onClick');
    onSelect?.(data);
  };

  const disclosure_onClick = () => {
    console.log('disclosure_onClick');
    onToggleExpand?.(data);
  };

  let icon: JSX.Element | null = null;
  if (hasIcon) {
    icon = (
      <IconContainer onClick={identity_onClick} role="button">
        {showIcon ? <Icon size="medium" title={iconAltText} /> : <IconPlaceholder />}
      </IconContainer>
    );
  }

  return (
    <MainLayout>
      <HBox gap="medium">
        <Identity gap="small">
          {icon}
          <Label onClick={identity_onClick} role="button" title={data.data.label}>
            {data.data.label}
          </Label>
        </Identity>
        {hasChildren ? (
          <Disclosure onClick={disclosure_onClick}>
            <ChevronUp />
          </Disclosure>
        ) : null}
      </HBox>
    </MainLayout>
  );
};
