import prisma from "../../../utils/prisma-client";
import { Services } from "../entity";

class HelloServices implements Services {
  GetHello(): string {
    return "hello world";
  }
}

export default HelloServices;
