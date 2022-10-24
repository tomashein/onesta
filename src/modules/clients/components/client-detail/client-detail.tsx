import Card from '@/components/card';
import Description from '@/components/description';
import { Client } from '../../types';

const ClientDetail: React.FC<Props> = ({ client }) => {
  return (
    <Card title="Client Detail">
      <Description>
        <Description.Item label="Name">{client.name}</Description.Item>
        <Description.Item label="Last Name">{client.lastName}</Description.Item>
        <Description.Item label="Email">{client.email}</Description.Item>
      </Description>
    </Card>
  );
};

export default ClientDetail;

type Props = {
  client: Client;
};
