import { prisma } from "../databases/database";
import { TProductsInsert } from "../types/dataTypes";

export async function findAll() {
  return await prisma.products.findMany({
    where: {},
    include: {
      User: {
        select: {
          id: true,
          userName: true,
          profilePicture: true,
        },
      },
    },
  });
}

export async function insert(data: TProductsInsert) {
  await prisma.products.create({ data });
}
