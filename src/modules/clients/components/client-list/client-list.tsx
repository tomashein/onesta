import Card from '@/components/card';
import Button from '@/components/button';
import Table from '@/components/table';
import Pagination from '@/components/pagination';
import { useState } from 'react';
import Link from 'next/link';
import useClients from '../../hooks/useClients';
import { Client } from '../../types';

const ClientList = () => {
  const [page, setPage] = useState(1);

  const toolbar = <Button variant="primary">Add Client</Button>;

  const columns = [
    {
      title: 'Name',
      key: 'name',
      cell: (row: Client) => (
        <Link href={`/clients/${row.id}`}>
          <a>{row.name}</a>
        </Link>
      )
    },
    {
      title: 'Last Name',
      key: 'lastName'
    },
    {
      title: 'Email',
      key: 'email'
    }
  ];

  return (
    <Card title="Client Listing" toolbar={toolbar}>
      <Table<Client> columns={columns} page={page} hook={useClients} />
      <Pagination<Client> page={page} setPage={setPage} hook={useClients} />
    </Card>
  );
};

export default ClientList;
