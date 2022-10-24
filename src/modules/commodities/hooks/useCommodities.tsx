import fetcher from '@/helpers/fetcher';
import { useMemo } from 'react';
import useSWR from 'swr';
import { CommoditiesResponse } from '../types';

const useCommodities = (page?: number) => {
  const { data, error } = useSWR<CommoditiesResponse, Error>(`/api/commodities${page ? '?page=' + page : ''}`, fetcher);

  const value = useMemo(
    () => ({
      data: data ? { collection: data.commodities, count: data.count } : undefined,
      isLoading: !error && !data,
      isError: error
    }),
    [data, error]
  );

  return value;
};

export default useCommodities;
