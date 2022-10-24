import fetcher from '@/helpers/fetcher';
import { useMemo } from 'react';
import useSWR from 'swr';
import { GrowersResponse } from '../types';

const useGrowers = (page?: number) => {
  const { data, error } = useSWR<GrowersResponse, Error>(`/api/growers${page ? '?page=' + page : ''}`, fetcher);

  const value = useMemo(
    () => ({
      data: data ? { collection: data.growers, count: data.count } : undefined,
      isLoading: !error && !data,
      isError: error
    }),
    [data, error]
  );

  return value;
};

export default useGrowers;
