export type CommodityInput = {
  name: string;
  varieties: string[];
};

export type CommodityVariety = {
  id: string;
  name: string;
};

export type Commodity = Omit<CommodityInput, 'varieties'> & {
  id: string;
  varieties: CommodityVariety[];
};

export type CommoditiesResponse = {
  commodities: Commodity[];
  count: number;
};
