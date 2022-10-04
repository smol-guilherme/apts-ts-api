import { prisma } from "../database/database";
import { TPostsInsert } from "../types/dataTypes";

export async function findAll() {
  return await prisma.posts.findMany({
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

export async function insert(data: TPostsInsert) {
  await prisma.posts.create({ data });
}
