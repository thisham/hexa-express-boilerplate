import { User } from "@prisma/client";
import { Domain } from "../entity";

export function mapToDomain(record: User): Domain {
  return {
    id: record.id,
    username: record.username,
    password: record.password,
  };
}

export function mapToBatchDomain(records: User[]): Domain[] {
  const domains: Domain[] = [];
  records.map((value) => domains.push(mapToDomain(value)));
  return domains;
}
