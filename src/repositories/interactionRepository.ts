import { prisma } from "../database/database";

export async function upvote(pid: string, uid: string) {
  const data = { postId: pid, userId: uid };
  return await prisma.stars.create({ data });
}

export async function findStarred(pid: string, uid: string) {
  const data = { postId: pid, userId: uid };
  console.log(data);

  return await prisma.stars.findUnique({
    where: {
      userId_postId: { ...data },
    },
  });
}

export async function downvote(pid: string, uid: string) {
  const data = { postId: pid, userId: uid };
  const response = await prisma.stars.delete({
    where: {
      userId_postId: data,
    },
  });
  console.log(response);

  return response;
}
