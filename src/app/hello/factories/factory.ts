import prisma from "../../../utils/prisma-client";
import HelloServices from "../services/usecases";
import HelloHandlers from "../handlers/handlers";

function HelloFactory(): HelloHandlers {
  const serv = new HelloServices();
  return new HelloHandlers(serv);
}

export default HelloFactory;
