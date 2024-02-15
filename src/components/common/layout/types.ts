import { SpacingVariant } from '../../../styled';

export interface BoxProps {
  /**
   * The amount of semantic space between children
   * @default medium
   */
  gap?: SpacingVariant;
  className?: string;
  children?: React.ReactNode;
  /**
   * The HTML element to use for the layout
   * @default div
   */
  element?: keyof JSX.IntrinsicElements;
  align?: 'start' | 'center' | 'end';
  naturalWidth?: boolean;
}
