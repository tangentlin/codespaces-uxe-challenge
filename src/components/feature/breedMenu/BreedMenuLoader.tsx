import useSWR from 'swr';
import { getAllBreeds } from '../../../api/dogApi';
import { swrOption } from '../../../api/swrOption';
import { DogBreedTreeItem } from '../../../utils/dogApiUtil';
import { getAllBreedListKey } from '../../../utils/swrUtil';
import { BreedMenu } from './BreedMenu';

export interface BreedMenuLoaderProps {
  selectedId?: string;
  defaultExpandedIds?: Set<string>;
  onSelect?: (data: DogBreedTreeItem) => void;
}

export const BreedMenuLoader: React.FC<BreedMenuLoaderProps> = (props) => {
  const { isLoading, data, error } = useSWR(getAllBreedListKey(), getAllBreeds, swrOption);
  if (error != null) {
    return <div>Error loading breeds</div>;
  }

  return <BreedMenu selectedId={props.selectedId} breeds={data} isLoading={isLoading} {...props} />;
};
