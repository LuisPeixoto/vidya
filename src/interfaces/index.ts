export interface IProduct {
  id?: string;
  name: string;
  description: string;
  version: string;
  images?: string[];
}

export interface ImageProps {
  uri: string;
  name: string;
  type: string;
}

export interface IClient {
  id?: string;
  cnpj: string;
  socialReason: string;
  fantasyName: string;
  cep: string;
  state: string;
  city: string;
  district: string;
  address: string;
  number: string;
  email: string;
  telephone: string;
  image?: string;
}

export interface IUser {
  id?: string;
  name: string;
  client: IClient;
  product: IProduct;
}
