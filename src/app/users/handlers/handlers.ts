import { Request, Response } from "express";
import { mapToDomain, UserRequest } from "./request/dto";
import { IResponse } from "../../../types/IResponse";
import { CreateResponse, UserResponse } from "./response/dto";
import { Services } from "../entity";

class UserHandlers {
  private services: Services;

  constructor(services: Services) {
    this.services = services;
  }

  async GetAllUsersHandler(
    req: Request,
    res: Response<IResponse<UserResponse[]>>
  ) {
    const users = await this.services.GetUsers();
    const response: UserResponse[] = [];
    users.map((value) => response.push(value));
    res.status(200).json({ status: 200, data: response });
  }

  async CreateUserHandler(
    req: Request,
    res: Response<IResponse<CreateResponse>>
  ) {
    const domain = mapToDomain(req.body);
    const id = await this.services.Post(domain);
    res.status(201).json({ status: 201, data: { id: id } });
  }
}

export default UserHandlers;
