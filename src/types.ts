export type Doctor = {
  key: string;
  name: string;
  field: string;
  img: string;
  about: string;
};

export type User = {
  name: string;
};



export type ProviderFunction = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}