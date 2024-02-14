import { useTheme } from '../../styled/theme/useTheme';
import { IconProps } from './types';

export const Icon: React.FC<IconProps> = (props) => {
  const { size = 'medium', color, icon: Glyph, title } = props;

  const { theme } = useTheme();
  const sizeValue = theme.iconSize[size];
  const fill = color ?? theme.palette.text.default;

  return <Glyph title={title} fill={fill} width={sizeValue} height={sizeValue} />;
};

export function createIconComponent(icon: IconProps['icon']) {
  return (props: Omit<IconProps, 'icon'>) => <Icon {...props} icon={icon} />;
}
