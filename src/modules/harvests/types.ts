import { Client } from '../clients';
import { Commodity, CommodityVariety } from '../commodities';
import { Farm, Grower } from '../growers';

export type HarvestInput = {
  growerId: string;
  farmId: string;
  clientId: string;
  commodityId: string;
  varietyId: string;
};

export type Harvest = {
  id: string;
  grower: Omit<Grower, 'farms'>;
  farm: Farm;
  client: Client;
  commodity: Omit<Commodity, 'varieties'>;
  variety: CommodityVariety;
  createdAt: string;
};

export type HarvestsResponse = {
  harvests: Harvest[];
  count: number;
};
