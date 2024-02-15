import { useEffect, useState } from 'react';
import { BreedListDto, allDogId } from '../../../models/dto';
import { DogBreedTreeItem, breedListToTreeItemList } from '../../../utils/dogApiUtil';
import Dog from '../../common/icon/Dog';
import { Tree } from '../../common/tree/Tree';

export interface BreedMenuProps {
  breeds?: BreedListDto;
  isLoading?: boolean;
  selectedId?: string;
  defaultExpandedIds?: Set<string>;
  onSelect?: (data: DogBreedTreeItem) => void;
}

export const BreedMenu: React.FC<BreedMenuProps> = (props) => {
  const { breeds, isLoading, onSelect, selectedId } = props;
  const [breedTree, setBreedTree] = useState<DogBreedTreeItem[]>([]);

  useEffect(() => {
    let result: DogBreedTreeItem[] = [];
    if (breeds) {
      const converted = breedListToTreeItemList(breeds);
      const root: DogBreedTreeItem = {
        id: allDogId,
        label: 'Dogs',
        children: converted,
        data: {
          breedIds: [allDogId]
        }
      };
      result = [root];
    }

    setBreedTree(result);
  }, [breeds, onSelect]);

  useEffect(() => {
    if (selectedId == null) {
      onSelect?.(breedTree[0]);
    }
  }, [breedTree, selectedId, onSelect]);

  return <Tree icon={Dog} items={breedTree} isLoading={isLoading} onSelect={onSelect} selectedId={selectedId} />;
};
