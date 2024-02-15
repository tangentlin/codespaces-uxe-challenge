import { MouseEvent, useCallback, useId } from 'react';
import { useTheme } from '../../../styled';
import { Skeleton } from '../skeleton/Skeleton';
import { createImageCardStyle } from './ImageCard.style';
import { ImageCardSize } from './types';

export interface ImageCardProps {
  size: ImageCardSize;
  imageUrl?: string;
  name: string;
  isLoading?: boolean;
  onClick?: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { theme } = useTheme();
  const { size = 'large', imageUrl, name, isLoading, onClick } = props;
  const {
    SmallLayout,
    LargeLayout,
    SmallImage,
    LargeImage,
    Caption,
    LargeImagePlaceHolder,
    SmallImagePlaceHolder,
    TextPlaceHolder
  } = createImageCardStyle(theme);

  const isSmall = size === 'small';
  const Layout = isSmall ? SmallLayout : LargeLayout;
  const Image = isSmall ? SmallImage : LargeImage;
  const gap = 'medium';
  const id = useId();

  const item_onClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      onClick?.();
    },
    [onClick]
  );
  const ImagePlaceHolder = isSmall ? SmallImagePlaceHolder : LargeImagePlaceHolder;

  if (isLoading) {
    return (
      <Layout gap={gap}>
        <ImagePlaceHolder>
          <Skeleton />
        </ImagePlaceHolder>
        <TextPlaceHolder>
          <Skeleton />
        </TextPlaceHolder>
      </Layout>
    );
  }

  return (
    <a onClick={item_onClick}>
      <Layout gap={gap}>
        <Image id={id} src={imageUrl} alt={name} loading="lazy" />
        <Caption htmlFor={id}>{name}</Caption>
      </Layout>
    </a>
  );
};
