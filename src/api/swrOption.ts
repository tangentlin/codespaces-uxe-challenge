import { SWRConfiguration } from 'swr';

export const swrOption: SWRConfiguration = {
  revalidateOnFocus: false,
  refreshInterval: 0
} as const;
