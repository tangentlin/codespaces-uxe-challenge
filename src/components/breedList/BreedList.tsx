import { useMemo } from 'react';
import { BreedListDto, allDogId } from '../../models/dto';
import { DogBreedTreeItem, breedListToTreeItemList } from '../../utils/dogApiUtil';
import Dog from '../icon/Dog';
import { Tree } from '../tree/Tree';

export interface BreedListProps {
  breeds?: BreedListDto;
  isLoading?: boolean;
  onSelect?: (data: DogBreedTreeItem) => void;
}

export const BreedList: React.FC<BreedListProps> = (props) => {
  const { breeds, isLoading, onSelect } = props;
  const breedTree: DogBreedTreeItem[] = useMemo(() => {
    if (!breeds) {
      return [];
    }
    const converted = breedListToTreeItemList(breeds);
    const root: DogBreedTreeItem = {
      id: allDogId,
      label: 'Dogs',
      children: converted,
      data: {
        breedIds: [allDogId]
      }
    };
    return [root];
  }, [breeds]);

  return <Tree icon={Dog} items={breedTree} isLoading={isLoading} onSelect={onSelect} />;
};
