import { Users } from "@prisma/client";
import { prisma } from "../database/database";
import { IRegistryBody } from "../types/dataTypes";

export async function findByEmail(email: string) {
  return await prisma.users.findFirst({
    where: {
      email,
    },
  });
}

export async function insert(userData: IRegistryBody): Promise<Users> {
  const data: IRegistryBody = { ...userData };
  delete data.repeatPassword;
  return await prisma.users.create({ data });
}

export async function findById(id: string): Promise<Users | null> {
  return await prisma.users.findFirst({ where: { id } });
}
