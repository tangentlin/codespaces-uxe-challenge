import memoize from 'micro-memoize';
import { Theme, styled } from '../../../styled';
import { VBox } from '../layout';
import { ImageCardVariation } from './types';

export const createImageCardStyle = memoize((theme: Theme) => {
  const sizeVariation: ImageCardVariation = {
    small: {
      imageWidth: theme.spacing.custom(32.5),
      imageHeight: theme.spacing.custom(25)
    },
    large: {
      imageWidth: theme.spacing.custom(40),
      imageHeight: theme.spacing.custom(25)
    }
  };

  const SmallLayout = styled(VBox)`
    width: ${sizeVariation.small.imageWidth};
  `;

  const LargeLayout = styled(VBox)`
    width: ${sizeVariation.large.imageWidth};
  `;

  const Image = styled('img')`
    object-fit: cover;
    border-radius: ${theme.spacing.large};
    box-shadow: 0px 0px 2px 0px #0000001f;
    box-shadow: 0px 8px 16px 0px #00000024;
    cursor: pointer;
  `;

  const SmallImage = styled(Image)`
    width: ${sizeVariation.small.imageWidth};
    height: ${sizeVariation.small.imageHeight};
  `;

  const LargeImage = styled(Image)`
    width: ${sizeVariation.large.imageWidth};
    height: ${sizeVariation.large.imageHeight};
  `;

  const Caption = styled('label')`
    color: ${theme.palette.text.default};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    margin: 0 ${theme.spacing.mediumLarge};
  `;

  const ImagePlaceHolder = styled('div')`
    border-radius: ${theme.spacing.large};
  `;

  const SmallImagePlaceHolder = styled(ImagePlaceHolder)`
    width: ${sizeVariation.small.imageWidth};
    height: ${sizeVariation.small.imageHeight};
  `;

  const LargeImagePlaceHolder = styled(ImagePlaceHolder)`
    width: ${sizeVariation.large.imageWidth};
    height: ${sizeVariation.large.imageHeight};
  `;

  const TextPlaceHolder = styled('div')`
    width: 100%;
    height: calc(${theme.typography.body.lineHeight} * ${theme.typography.body.fontSize});
  `;

  return {
    SmallLayout,
    LargeLayout,
    SmallImage,
    LargeImage,
    Caption,
    LargeImagePlaceHolder,
    SmallImagePlaceHolder,
    TextPlaceHolder
  };
});
