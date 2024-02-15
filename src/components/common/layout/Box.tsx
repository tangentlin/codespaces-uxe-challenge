import { styled, useTheme } from '../../../styled';
import { BoxProps } from './types';

export function HBox<T>(props: BoxProps & T) {
  const { gap = 'medium', children, className, element = 'div', align = 'center', naturalWidth } = props;
  const { theme } = useTheme();
  const Layout = styled(element)`
    display: flex;
    width: ${naturalWidth ? 'auto' : '100%'};
    flex-direction: row;
    gap: ${theme.spacing[gap]};
    align-items: ${align};
  `;
  return (
    <Layout tabIndex={props.tabIndex} role={props.role} onClick={props.onClick} className={className}>
      {children}
    </Layout>
  );
}

export function VBox<T>(props: BoxProps & T) {
  const { gap = 'medium', children, className, element = 'div', align = 'justify-content', naturalWidth } = props;
  const { theme } = useTheme();
  const Layout = styled(element)`
    display: flex;
    width: ${naturalWidth ? 'auto' : '100%'};
    flex-direction: column;
    gap: ${theme.spacing[gap]};
    align-items: ${align};
  `;
  return (
    <Layout tabIndex={props.tabIndex} role={props.role} onClick={props.onClick} className={className}>
      {children}
    </Layout>
  );
}
