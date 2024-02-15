import axios from 'axios';
import { ApiSuccessResult, BreedListDto } from '../models/dto';

export async function getAllBreeds(): Promise<BreedListDto> {
  const resp = await axios.get<ApiSuccessResult<BreedListDto>>('https://dog.ceo/api/breeds/list/all');
  return resp.data.message;
}

export async function getRandomImageByBreed(breedIds: readonly string[]): Promise<string> {
  const breedPath = getBreedPath(breedIds);
  const url = `https://dog.ceo/api/breed/${breedPath}/images/random`;
  const resp = await axios.get<ApiSuccessResult<string>>(url);
  return resp.data.message;
}

export async function getImageListByBreed(breedIds: readonly string[]): Promise<string[]> {
  const breedPath = getBreedPath(breedIds);
  const url = `https://dog.ceo/api/breed/${breedPath}/images`;
  const resp = await axios.get<ApiSuccessResult<string[]>>(url);
  return resp.data.message;
}

export function getBreedPath(breedIds: readonly string[]): string {
  return breedIds.map((id) => encodeURIComponent(id)).join('/');
}
