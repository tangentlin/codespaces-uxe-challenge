import { DogBreedTreeItem } from './dogApiUtil';

export function getAllBreedListKey(): string {
  return 'all-breeds';
}

export function getDogCoverImageKey(breed: DogBreedTreeItem): string {
  return `dog-cover-image-${breed.id}`;
}

export function getDogBreedDetailListKey(breed: DogBreedTreeItem): string {
  return `dog-breed-detail-list-${breed.id}`;
}
