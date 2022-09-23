import { Users } from "@prisma/client";
import { prisma } from "../databases/database";
import { IRegistryBody, TUsersInsert } from "../types/dataTypes";

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

export async function findById(id: number): Promise<Users | null> {
  const response = await prisma.users.findFirst({ where: { id } });
  return response;
}
