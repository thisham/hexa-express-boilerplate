export type Domain = {
  id: string;
  username: string;
  password: string;
};

export interface Services {
  GetHello(): string;
}
