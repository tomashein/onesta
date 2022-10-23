import Card from '@/components/card';
import Button from '@/components/button';
import Table from '@/components/table';
import Pagination from '@/components/pagination';
import { useState } from 'react';
import Link from 'next/link';
import useCommodities from '../../hooks/useCommodities';
import { Commodity } from '../../types';

const CommodityList = () => {
  const [page, setPage] = useState(1);

  const toolbar = <Button variant="primary">Add Commodity</Button>;

  const columns = [
    {
      title: 'Name',
      key: 'name',
      cell: (row: Commodity) => (
        <Link href={`/commodities/${row.id}`}>
          <a>{row.name}</a>
        </Link>
      )
    },
    {
      title: 'Varieties',
      key: 'varieties',
      cell: (row: Commodity) => row.varieties.length
    }
  ];

  return (
    <Card title="Commodity Listing" toolbar={toolbar}>
      <Table<Commodity> columns={columns} page={page} hook={useCommodities} />
      <Pagination<Commodity> page={page} setPage={setPage} hook={useCommodities} />
    </Card>
  );
};

export default CommodityList;
