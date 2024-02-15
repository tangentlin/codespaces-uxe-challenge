import { DogBreedTreeItem } from '../../../utils/dogApiUtil';
import { HasClassName } from '../../common/types';
import { BreedDetailListGallery } from './BreedDetailListGallery';
import { BreedListGallery } from './BreedListGallery';
import { LoadingGallery } from './LoadingGallery';

export interface BreedGalleryProps extends HasClassName {
  breed?: DogBreedTreeItem;
  onSelect?: (data: DogBreedTreeItem) => void;
}

export const BreedGallery: React.FC<BreedGalleryProps> = (props) => {
  const { breed, onSelect } = props;

  if (breed == null) {
    return <LoadingGallery className={props.className} />;
  }

  if (breed.children && breed.children.length > 0) {
    return <BreedListGallery className={props.className} breeds={breed.children} onSelect={onSelect} />;
  }

  return <BreedDetailListGallery className={props.className} breed={breed} />;
};
