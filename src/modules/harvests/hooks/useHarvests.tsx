import fetcher from '@/helpers/fetcher';
import useSWR from 'swr';
import { HarvestsResponse } from '../types';

const useHarvests = (page?: number) => {
  const { data, error } = useSWR<HarvestsResponse, Error>(`/api/harvests${page ? '?page=' + page : ''}`, fetcher);

  return {
    data: data
      ? {
          collection: data.harvests,
          count: data.count
        }
      : undefined,
    isLoading: !error && !data,
    isError: error
  };
};

export default useHarvests;
