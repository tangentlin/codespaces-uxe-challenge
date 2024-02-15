import { useMemo } from 'react';
import useSWR from 'swr';
import { getImageListByBreed } from '../../../api/dogApi';
import { swrOption } from '../../../api/swrOption';
import { DogBreedTreeItem, deriveIdFromImagePath as deriveNameFromImagePath } from '../../../utils/dogApiUtil';
import { getDogBreedDetailListKey } from '../../../utils/swrUtil';
import { CardList, CardListProps } from '../../common/card/CardList';
import { HasClassName } from '../../common/types';
import { StaticDogCard } from '../dogCard/StaticDogCard';
import { LoadingGallery } from './LoadingGallery';

export interface BreedDetailListGalleryProps extends HasClassName {
  breed: DogBreedTreeItem;
  onSelect?: (data: BreedWithImage) => void;
}

export interface BreedWithImage {
  id: string;
  breed: DogBreedTreeItem;
  imageUrl: string;
  name: string;
}

const itemRenderer: CardListProps<BreedWithImage>['renderItem'] = (props) => {
  const { item, size, onSelected } = props;
  return (
    <StaticDogCard
      name={item.name}
      breed={item.breed}
      imageUrl={item.imageUrl}
      size={size}
      onSelect={() => onSelected?.(item)}
    />
  );
};

const itemKey = (item: BreedWithImage) => item.id;

function getBreedWidthImage(breed: DogBreedTreeItem, imageUrl: string): BreedWithImage {
  const imageName = deriveNameFromImagePath(imageUrl);
  const name = imageName;
  return {
    id: imageName,
    breed,
    imageUrl,
    name
  };
}

export const BreedDetailListGallery: React.FC<BreedDetailListGalleryProps> = (props) => {
  const { breed, onSelect } = props;

  const { isLoading, data, error } = useSWR(
    getDogBreedDetailListKey(breed),
    () => getImageListByBreed(breed.data.breedIds),
    swrOption
  );

  const images = useMemo(() => {
    if (data == null) {
      return [];
    }
    return data.map((imageUrl) => getBreedWidthImage(breed, imageUrl));
  }, [data]);

  if (error != null) {
    return <div>Error loading breeds</div>;
  }

  if (isLoading) {
    <LoadingGallery className={props.className} />;
  }

  return (
    <CardList<BreedWithImage>
      listLayoutClassName={props.className}
      items={images}
      renderItem={itemRenderer}
      itemKey={itemKey}
      onSelected={onSelect}
    />
  );
};
