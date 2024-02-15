import useSWR from 'swr';
import { getAllBreeds } from '../../api/dogApi';
import { DogBreedTreeItem } from '../../utils/dogApiUtil';
import { BreedList } from './BreedList';

export interface BreedListLoaderProps {
  defaultSelectedId?: string;
  defaultExpandedIds?: Set<string>;
  onSelect?: (data: DogBreedTreeItem) => void;
}

export const BreedListLoader: React.FC<BreedListLoaderProps> = (props) => {
  const { isLoading, data, error } = useSWR('all-breeds', getAllBreeds);
  if (error != null) {
    return <div>Error loading breeds</div>;
  }

  return <BreedList breeds={data} isLoading={isLoading} {...props} />;
};
