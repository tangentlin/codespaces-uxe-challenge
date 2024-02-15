import { useCallback } from 'react';
import useSWR from 'swr';
import { getRandomImageByBreed } from '../../../api/dogApi';
import { swrOption } from '../../../api/swrOption';
import { DogBreedTreeItem } from '../../../utils/dogApiUtil';
import { getDogCoverImageKey } from '../../../utils/swrUtil';
import { ImageCard } from '../../common/card/ImageCard';
import { ImageCardSize } from '../../common/card/types';

export interface DynamicDogCardEventArg {
  breed: DogBreedTreeItem;
}

export interface DynamicDogCardProps {
  breed: DogBreedTreeItem;
  size?: ImageCardSize;
  onSelect?: (evt: DynamicDogCardEventArg) => void;
}

/**
 * DynamicDogCard component is a card that displays a random image of a dog breed.
 * The card automatically fetches a random image of the breed from the Dog API.
 * However, this may not always be the best approach for a production application, as it may
 * result in a lot of unnecessary requests to the Dog API, which may be prone to rate-limited
 * or throttled API.
 * @param props
 * @returns
 */
export const DynamicDogCard: React.FC<DynamicDogCardProps> = (props) => {
  const { breed, size = 'large' } = props;

  const { isLoading, data, error } = useSWR(
    getDogCoverImageKey(breed),
    () => getRandomImageByBreed(breed.data.breedIds),
    swrOption
  );

  if (error != null) {
    return <div>Error loading breeds</div>;
  }

  if (isLoading) {
    <ImageCard size={size} isLoading={true} name={breed.label} />;
  }

  const image_onClick = useCallback(() => {
    props.onSelect?.({ breed });
  }, [breed]);

  return <ImageCard size={size} imageUrl={data} name={breed.label} onClick={image_onClick} />;
};
