import fetcher from '@/helpers/fetcher';
import { useMemo } from 'react';
import useSWR from 'swr';
import { HarvestsResponse } from '../types';

const useHarvests = (page?: number) => {
  const { data, error } = useSWR<HarvestsResponse, Error>(`/api/harvests${page ? '?page=' + page : ''}`, fetcher);

  const value = useMemo(
    () => ({
      data: data ? { collection: data.harvests, count: data.count } : undefined,
      isLoading: !error && !data,
      isError: error
    }),
    [data, error]
  );

  return value;
};

export default useHarvests;
