import { DogBreedTreeItem } from '../../../utils/dogApiUtil';
import { ImageCard } from '../../common/card/ImageCard';
import { ImageCardSize } from '../../common/card/types';

export interface StaticDogCardEventArg {
  breed: DogBreedTreeItem;
  imageURL: string;
}

export interface StaticDogCardProps {
  breed: DogBreedTreeItem;
  size?: ImageCardSize;
  imageUrl: string;
  /**
   * When name is presence, it will be used as the name of the dog breed.
   */
  name?: string;
  onSelect?: (evt: StaticDogCardEventArg) => void;
}

/**
 * StaticDogCard component is a card that displays a known image of a dog breed.
 * @param props
 * @returns
 */
export const StaticDogCard: React.FC<StaticDogCardProps> = (props) => {
  const { breed, size = 'large', imageUrl, name } = props;

  function image_onClick() {
    props.onSelect?.({ breed, imageURL: imageUrl });
  }

  return <ImageCard size={size} imageUrl={imageUrl} name={name ?? breed.label} onClick={image_onClick} />;
};
