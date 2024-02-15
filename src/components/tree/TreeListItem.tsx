import { useMemo } from 'react';
import { useTheme } from '../../styled';
import ChevronUp from '../icon/ChevronUp';
import { IconComponentType } from '../icon/types';
import { HBox } from '../layout';
import { createTreeListItemStyle, getLabelStyledComponent } from './TreeListIem.style';
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

export const TreeListItem: React.FC<TreeListItemProps> = (props) => {
  // For simplicity, icon is only shown when item is selected
  const { icon: Icon, iconAltText, data, expanded = false, selected = false, onToggleExpand, onSelect } = props;
  const { theme } = useTheme();
  const { Disclosure, Identity, IconPlaceholder, MainLayout, IconContainer } = createTreeListItemStyle(theme);

  const hasIcon = Icon != null;
  const showIcon = selected && hasIcon;
  const hasChildren = data.children != null && data.children.length > 0;

  const Label = getLabelStyledComponent(data.depth, theme);
  const identity_onClick = (e: React.MouseEvent) => {
    onSelect?.(data);
    if (hasChildren) {
      onToggleExpand?.(data);
    }
  };

  const disclosure_onClick = () => {
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

  const className = useMemo(() => {
    const classNames: string[] = [];
    if (selected) {
      classNames.push('selected');
    }
    if (expanded) {
      classNames.push('expanded');
    }
    return classNames.join(' ');
  }, [selected]);

  return (
    <MainLayout className={className}>
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
