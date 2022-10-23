export type FarmInput = {
  name: string;
  address: string;
};

export type Farm = FarmInput & {
  id: string;
};

export type GrowerInput = {
  name: string;
  lastName: string;
  email: string;
  farms: FarmInput[];
};

export type Grower = Omit<GrowerInput, 'farms'> & {
  id: string;
  farms: Farm[];
};

export type GrowersResponse = {
  growers: Grower[];
  count: number;
};
