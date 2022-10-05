import { prisma } from "../database/database";

export async function upvote(pid: string, uid: string) {
  const data = { postId: pid, userId: uid };
  return await prisma.stars.create({ data });
}

export async function findStarred(pid: string, uid: string) {
  return null;
}
