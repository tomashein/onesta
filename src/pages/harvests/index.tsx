import Layout from '@/layout';
import { HarvestList } from '@/modules/harvests';
import type { NextPage } from 'next';

const Harvests: NextPage = () => {
  return (
    <Layout title="Harvests">
      <HarvestList />
    </Layout>
  );
};

export default Harvests;
