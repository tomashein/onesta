export type ClientInput = {
  name: string;
  lastName: string;
  email: string;
};

export type Client = ClientInput & {
  id: string;
};

export type ClientsResponse = {
  clients: Client[];
  count: number;
};
