import fetcher from '@/helpers/fetcher';
import useSWR from 'swr';
import { GrowersResponse } from '../types';

const useGrowers = (page?: number) => {
  const { data, error } = useSWR<GrowersResponse, Error>(`/api/growers${page ? '?page=' + page : ''}`, fetcher);

  return {
    data: data
      ? {
          collection: data.growers,
          count: data.count
        }
      : undefined,
    isLoading: !error && !data,
    isError: error
  };
};

export default useGrowers;
