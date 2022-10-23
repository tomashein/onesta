import fetcher from '@/helpers/fetcher';
import useSWR from 'swr';
import { CommoditiesResponse } from '../types';

const useCommodities = (page?: number) => {
  const { data, error } = useSWR<CommoditiesResponse, Error>(`/api/commodities${page ? '?page=' + page : ''}`, fetcher);

  return {
    data: data
      ? {
          collection: data.commodities,
          count: data.count
        }
      : undefined,
    isLoading: !error && !data,
    isError: error
  };
};

export default useCommodities;
