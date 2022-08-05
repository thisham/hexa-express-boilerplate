export type Domain = {
  id: string;
  username: string;
  password: string;
};

export interface Services {
  GetUsers(): Promise<Domain[]>;
  Post(domain: Domain): Promise<string>;
}

export interface Repositories {
  GetUsers(): Promise<Domain[]>;
  AddUsers(domain: Domain): Promise<{ id: string; err: unknown }>;
}
