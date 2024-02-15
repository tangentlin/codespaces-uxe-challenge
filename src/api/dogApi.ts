import axios from 'axios';
import { ApiSuccessResult, BreedListDto } from '../models/dto';

export async function getAllBreeds(): Promise<BreedListDto> {
  const resp = await axios.get<ApiSuccessResult<BreedListDto>>('https://dog.ceo/api/breeds/list/all');
  return resp.data.message;
}
