import Layout from '@/layout';
import { CommodityList } from '@/modules/commodities';
import type { NextPage } from 'next';

const Commodities: NextPage = () => {
  return (
    <Layout title="Commodities">
      <CommodityList />
    </Layout>
  );
};

export default Commodities;
