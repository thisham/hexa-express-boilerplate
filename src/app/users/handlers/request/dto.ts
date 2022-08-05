import { Domain } from "../../entity";

export type UserRequest = {
  username: string;
  password: string;
};

export function mapToDomain(req: UserRequest): Domain {
  return {
    id: "",
    username: req.username,
    password: req.password,
  };
}
