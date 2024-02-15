export interface ApiSuccessResult<T> {
  status: 'success';
  message: T;
}

export type BreedListDto = Record<string, readonly string[]>;

export const allDogId = 'all-dogs';
