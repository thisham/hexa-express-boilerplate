import prisma from "../../../utils/prisma-client";
import UserRepositories from "../repositories/queries";
import UserServices from "../services/usecases";
import UserHandlers from "../handlers/handlers";

function UserFactory(): UserHandlers {
  const repo = new UserRepositories(prisma);
  const serv = new UserServices(repo);
  return new UserHandlers(serv);
}

export default UserFactory;
