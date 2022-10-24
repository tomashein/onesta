import fetcher from '@/helpers/fetcher';
import { useMemo } from 'react';
import useSWR from 'swr';
import { ClientsResponse } from '../types';

const useClients = (page?: number) => {
  const { data, error } = useSWR<ClientsResponse, Error>(`/api/clients${page ? '?page=' + page : ''}`, fetcher);

  const value = useMemo(
    () => ({
      data: data ? { collection: data.clients, count: data.count } : undefined,
      isLoading: !error && !data,
      isError: error
    }),
    [data, error]
  );

  return value;
};

export default useClients;
