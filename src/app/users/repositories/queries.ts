import { randomUUID } from "crypto";
import prisma from "../../../utils/prisma-client";
import { Domain, Repositories, Services } from "../entity";
import { mapToBatchDomain } from "./mapper";

class UserRepositories implements Repositories {
  private db: typeof prisma;

  constructor(db: typeof prisma) {
    this.db = db;
  }

  async GetUsers(): Promise<Domain[]> {
    const records = await this.db.user.findMany();
    const domains = mapToBatchDomain(records);
    return domains;
  }

  async AddUsers(domain: Domain): Promise<{ id: string; err: unknown }> {
    const uuid = randomUUID();

    try {
      await this.db.user.create({
        data: {
          id: uuid,
          username: domain.username,
          password: domain.password,
        },
      });

      return { id: uuid, err: null };
    } catch (error) {
      return { id: "", err: error };
    }
  }
}

export default UserRepositories;
