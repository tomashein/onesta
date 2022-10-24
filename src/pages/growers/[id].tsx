import Layout from '@/layout';
import { Grower, GrowerDetail } from '@/modules/growers';
import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${process.env.API_URL}/growers/${id}`);
  const { grower } = await res.json();
  return { props: { grower } };
};

const GrowerPage: NextPage<Props> = ({ grower }) => {
  return (
    <Layout title={`${grower.name} ${grower.lastName}`}>
      <GrowerDetail grower={grower} />
    </Layout>
  );
};

export default GrowerPage;

type Props = {
  grower: Grower;
};
