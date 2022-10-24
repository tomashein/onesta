import Card from '@/components/card';
import Button from '@/components/button';
import Table from '@/components/table';
import Pagination from '@/components/pagination';
import useDrawer from '@/hooks/useDrawer';
import { useState } from 'react';
import Link from 'next/link';
import { useSWRConfig } from 'swr';
import useHarvests from '../../hooks/useHarvests';
import { Harvest } from '../../types';
import HarvestForm from '../harvest-form';

const HarvestList = () => {
  const [page, setPage] = useState(1);
  const { openDrawer } = useDrawer();
  const { mutate } = useSWRConfig();

  const toolbar = (
    <Button
      onClick={() =>
        openDrawer({
          title: 'Add Harvests',
          component: HarvestForm,
          callback: () => {
            mutate(`/api/harvests?page=${page}`);
          }
        })
      }
      variant="primary"
    >
      Add Harvest
    </Button>
  );

  const columns = [
    {
      title: 'Client',
      key: 'client',
      cell: (row: Harvest) => (
        <Link href={`/clients/${row.client.id}`}>
          <a>
            {row.client.name} {row.client.lastName}
          </a>
        </Link>
      )
    },
    {
      title: 'Grower',
      key: 'grower',
      cell: (row: Harvest) => (
        <Link href={`/growers/${row.grower.id}`}>
          <a>
            {row.grower.name} {row.grower.lastName}
          </a>
        </Link>
      )
    },
    {
      title: 'Farm',
      key: 'farm',
      cell: (row: Harvest) => row.farm.name
    },
    {
      title: 'Commodity',
      key: 'commodity',
      cell: (row: Harvest) => (
        <Link href={`/commodities/${row.commodity.id}`}>
          <a>{row.commodity.name}</a>
        </Link>
      )
    },
    {
      title: 'Variety',
      key: 'variety',
      cell: (row: Harvest) => row.variety.name
    },
    {
      title: 'Created',
      key: 'createdAt',
      cell: (row: Harvest) => {
        const date = new Date(row.createdAt);
        return date.toLocaleString();
      }
    }
  ];

  return (
    <Card title="Harvest Listing" toolbar={toolbar}>
      <Table<Harvest> columns={columns} page={page} hook={useHarvests} />
      <Pagination<Harvest> page={page} setPage={setPage} hook={useHarvests} />
    </Card>
  );
};

export default HarvestList;
