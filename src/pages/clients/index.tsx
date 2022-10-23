import Layout from '@/layout';
import { ClientList } from '@/modules/clients';
import type { NextPage } from 'next';

const Clients: NextPage = () => {
  return (
    <Layout title="Clients">
      <ClientList />
    </Layout>
  );
};

export default Clients;
