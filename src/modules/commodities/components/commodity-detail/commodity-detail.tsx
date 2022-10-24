import Card from '@/components/card';
import Description from '@/components/description';
import { Commodity } from '../../types';

const CommodityDetail: React.FC<Props> = ({ commodity }) => {
  return (
    <Card title="Commodity Detail">
      <Description>
        <Description.Item label="Name">{commodity.name}</Description.Item>
      </Description>
    </Card>
  );
};

export default CommodityDetail;

type Props = {
  commodity: Commodity;
};
