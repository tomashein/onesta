import Layout from '@/layout';
import { Commodity, CommodityDetail } from '@/modules/commodities';
import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${process.env.API_URL}/commodities/${id}`);
  const { commodity } = await res.json();
  return { props: { commodity } };
};

const CommodityPage: NextPage<Props> = ({ commodity }) => {
  return (
    <Layout title={commodity.name}>
      <CommodityDetail commodity={commodity} />
    </Layout>
  );
};

export default CommodityPage;

type Props = {
  commodity: Commodity;
};
