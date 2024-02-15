import { DogBreedTreeItem } from '../../../utils/dogApiUtil';
import { CardList, CardListProps } from '../../common/card/CardList';
import { HasClassName } from '../../common/types';
import { DynamicDogCard } from '../dogCard/DynamicDogCard';

export interface BreedListGalleryProps extends HasClassName {
  breeds: readonly DogBreedTreeItem[];
  onSelect?: (data: DogBreedTreeItem) => void;
}

const itemRenderer: CardListProps<DogBreedTreeItem>['renderItem'] = (props) => {
  const { item, size, onSelected } = props;
  return <DynamicDogCard breed={item} size={size} onSelect={({ breed }) => onSelected?.(breed)} />;
};

const itemKey = (item: DogBreedTreeItem) => item.id;

export const BreedListGallery: React.FC<BreedListGalleryProps> = (props) => {
  const { breeds, onSelect } = props;

  return (
    <CardList<DogBreedTreeItem>
      listLayoutClassName={props.className}
      items={breeds}
      renderItem={itemRenderer}
      itemKey={itemKey}
      onSelected={onSelect}
    />
  );
};
