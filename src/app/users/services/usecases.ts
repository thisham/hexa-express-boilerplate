import prisma from "../../../utils/prisma-client";
import { Domain, Repositories, Services } from "../entity";

class UserServices implements Services {
  private repo: Repositories;

  constructor(repo: Repositories) {
    this.repo = repo;
  }

  async GetUsers(): Promise<Domain[]> {
    const users = await this.repo.GetUsers();
    return users;
  }

  async Post(domain: Domain): Promise<string> {
    const user = await this.repo.AddUsers(domain);
    return user.id;
  }
}

export default UserServices;
