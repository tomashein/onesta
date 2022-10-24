import fetcher from '@/helpers/fetcher';
import { useMemo } from 'react';
import useSWR from 'swr';
import { ClientResponse } from '../types';

const useClient = (id: string) => {
  const { data, error } = useSWR<ClientResponse, Error>(`/api/clients/${id}`, fetcher);

  const value = useMemo(
    () => ({
      data: data,
      isLoading: !error && !data,
      isError: error
    }),
    [data, error]
  );

  return value;
};

export default useClient;
