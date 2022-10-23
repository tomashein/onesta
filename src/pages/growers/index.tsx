import Layout from '@/layout';
import { GrowerList } from '@/modules/growers';
import type { NextPage } from 'next';

const Growers: NextPage = () => {
  return (
    <Layout title="Growers">
      <GrowerList />
    </Layout>
  );
};

export default Growers;
