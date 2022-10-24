import Card from '@/components/card';
import Description from '@/components/description';
import { Grower } from '../../types';

const GrowerDetail: React.FC<Props> = ({ grower }) => {
  return (
    <Card title="Grower Detail">
      <Description>
        <Description.Item label="Name">{grower.name}</Description.Item>
      </Description>
    </Card>
  );
};

export default GrowerDetail;

type Props = {
  grower: Grower;
};
