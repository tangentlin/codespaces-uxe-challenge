import { TreeItem } from '../components/common';
import { BreedListDto } from '../models/dto';
import { initialCaps } from './stringUtil';

export interface DogBreedData {
  /**
   * Hierarchical list of dog breeds and sub-breeds
   * This would be used to make API calls to get images for a specific breed
   */
  breedIds: string[];
}

export type DogBreedTreeItem = TreeItem<DogBreedData>;

export function breedListToTreeItemList(breedList: BreedListDto): DogBreedTreeItem[] {
  const rootItems: DogBreedTreeItem[] = [];
  Object.entries(breedList).forEach(([breed, subBreeds]) => {
    const parent = toTreeItem(breed);
    rootItems.push(parent);
    if (subBreeds.length > 0) {
      parent.children = subBreeds.map((subBreed) => toTreeItem(subBreed, parent));
    }
  });
  return rootItems;
}

export function toTreeItem(breed: string, parent?: DogBreedTreeItem): DogBreedTreeItem {
  const breedIds = [];
  const names = [];
  if (parent) {
    breedIds.push(parent.id);
    names.push(parent.label);
  }
  breedIds.push(breed);
  names.unshift(getBreedName(breed));
  return {
    id: breedIds.join('/'),
    label: names.join(' '),
    data: {
      breedIds
    }
  };
}

const specialTranslations: Map<string, string> = new Map([
  ['germanshepherd', 'German Shepherd'],
  ['westhighland', 'West Highland'],
  ['germanlonghair', 'German Longhair']
]);
export function getBreedName(id: string): string {
  return specialTranslations.get(id) ?? initialCaps(id);
}

let unknownCount = 0;
export function deriveIdFromImagePath(imageUrl: string): string {
  const lastSlash = imageUrl.lastIndexOf('/');
  if (lastSlash === -1) {
    // Unlikely to happen, but just in case
    unknownCount += 1;
    return `Unknown-${unknownCount.toString().padStart(3, '0')}`;
  }

  return imageUrl.substring(lastSlash + 1);
}
