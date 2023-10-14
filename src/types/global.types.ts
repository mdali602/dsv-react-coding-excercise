export type ActionType =
  | "INCREMENT"
  | "DECREMENT"
  | "RESET"
  | "INCREMENT_RANDOM"
  | "INCREMENT_NEAREST_ODD"
  | "DECREMENT_BY_VALUE";

export type Action = {
  type: ActionType;
  payload?: number;
};

export type UserWithRestoreType = User & { shouldRestore: boolean };

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  age: number;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type PartialUser = Pick<User, "id" | "username" | "address" | "age"> & {
  userId: string;
  companyName: string;
};
