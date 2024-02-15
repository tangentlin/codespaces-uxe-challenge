import { IconSize } from '../../../styled/theme/Theme';

export interface SvgProps {
  fill?: string;
  width?: string;
  height?: string;
  title?: string;
}

export interface IconProps {
  size?: IconSize;
  color?: string;
  icon: React.ComponentType<SvgProps>;
  title?: string;
}

export type IconComponentType = React.FC<Omit<IconProps, 'icon'>>;
