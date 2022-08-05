import { Request, Response } from "express";
import { IResponse } from "../../../types/IResponse";
import { Services } from "../entity";

class HelloHandlers {
  private services: Services;

  constructor(services: Services) {
    this.services = services;
  }

  GetHelloHandler(req: Request, res: Response<IResponse<{ greet: string }>>) {
    res
      .status(200)
      .json({ status: 200, data: { greet: this.services.GetHello() } });
  }
}

export default HelloHandlers;
