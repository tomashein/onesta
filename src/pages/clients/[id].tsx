import Layout from '@/layout';
import { Client, ClientDetail } from '@/modules/clients';
import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${process.env.API_URL}/clients/${id}`);
  const { client } = await res.json();
  return { props: { client } };
};

const Client: NextPage<Props> = ({ client }) => {
  return (
    <Layout title={`${client.name} ${client.lastName}`}>
      <ClientDetail client={client} />
    </Layout>
  );
};

export default Client;

type Props = {
  client: Client;
};
