import { styled, useTheme } from '../../styled';
import { BoxProps } from './types';

export function HBox<T>(props: BoxProps & T) {
  const { gap = 'medium', children, className, element = 'div' } = props;
  const { theme } = useTheme();
  const Layout = styled(element)`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: ${theme.spacing[gap]};
  `;
  return <Layout className={className}>{children}</Layout>;
}

export function VBox<T>(props: BoxProps & T) {
  const { gap = 'medium', children, className, element = 'div' } = props;
  const { theme } = useTheme();
  const Layout = styled(element)`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: ${theme.spacing[gap]};
  `;
  return <Layout className={className}>{children}</Layout>;
}
