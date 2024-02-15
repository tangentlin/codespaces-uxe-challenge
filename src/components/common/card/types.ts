export interface ImageCardDimension {
  imageWidth: string;
  imageHeight: string;
}

export interface ImageCardVariation {
  small: ImageCardDimension;
  large: ImageCardDimension;
}

export type ImageCardSize = keyof ImageCardVariation;

export interface CardListLayout {
  columnGap: string;
  rowGap: string;
}

export interface CardListVariation {
  small: CardListLayout;
  large: CardListLayout;
}

// TODO: Naming of CardListSize is not descriptive for its purpose
export type CardListSize = keyof CardListVariation;
