import fetcher from '@/helpers/fetcher';
import useSWR from 'swr';
import { ClientsResponse } from '../types';

const useClients = (page?: number) => {
  const { data, error } = useSWR<ClientsResponse, Error>(`/api/clients${page ? '?page=' + page : ''}`, fetcher);

  return {
    data: data
      ? {
          collection: data.clients,
          count: data.count
        }
      : undefined,
    isLoading: !error && !data,
    isError: error
  };
};

export default useClients;
