import { Posts } from "@prisma/client";
import { prisma } from "../database/database";
import { TPostsInsert } from "../types/dataTypes";

export async function findAll(filter?: string): Promise<Posts[]> {
  return await prisma.posts.findMany({ where: {} });
}

export async function insert(data: TPostsInsert): Promise<Posts> {
  return await prisma.posts.create({ data });
}
