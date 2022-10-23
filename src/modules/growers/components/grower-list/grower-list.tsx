import Card from '@/components/card';
import Button from '@/components/button';
import Table from '@/components/table';
import Pagination from '@/components/pagination';
import { useState } from 'react';
import Link from 'next/link';
import useGrowers from '../../hooks/useGrowers';
import { Grower } from '../../types';

const GrowerList = () => {
  const [page, setPage] = useState(1);

  const toolbar = <Button variant="primary">Add Grower</Button>;

  const columns = [
    {
      title: 'Name',
      key: 'name',
      cell: (row: Grower) => (
        <Link href={`/growers/${row.id}`}>
          <a>{row.name}</a>
        </Link>
      )
    },
    {
      title: 'Last Name',
      key: 'lastName'
    }
  ];

  return (
    <Card title="Grower Listing" toolbar={toolbar}>
      <Table<Grower> columns={columns} page={page} hook={useGrowers} />
      <Pagination<Grower> page={page} setPage={setPage} hook={useGrowers} />
    </Card>
  );
};

export default GrowerList;
