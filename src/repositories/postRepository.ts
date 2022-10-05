import { Posts } from "@prisma/client";
import { prisma } from "../database/database";
import { IPostsResponse, TPostsInsert } from "../types/dataTypes";

export async function findByUUID(postId: string) {
  return await prisma.posts.findFirst({ where: { id: postId } });
}

export async function findAll(
  userId: string,
  filter?: string
): Promise<IPostsResponse[]> {
  const response = await prisma.posts.findMany({
    where: {},
    include: {
      author: {
        select: {
          username: true,
        },
      },
      location: {
        select: {
          locationName: true,
          type: true,
          latitude: true,
          longitude: true,
        },
      },
      _count: {
        select: {
          stars: true,
        },
      },
      stars: {
        select: {
          userId: true,
        },
      },
    },
  });
  const newResponse = response.map((item) => {
    return {
      id: item.id,
      date: item.createdAt,
      title: item.title,
      description: item.description,
      location: {
        id: item.locationId,
        ...item.location,
      },
      author: {
        authorId: item.authorId,
        ...item.author,
      },
      stars: item._count.stars,
      likedBy: item.stars.map((uid) => uid.userId),
    };
  });

  return newResponse;
}

export async function insert(data: TPostsInsert): Promise<Posts> {
  return await prisma.posts.create({ data });
}

export async function updateStars(pid: string) {
  const response = await prisma.posts.findFirst({
    include: {
      _count: {
        select: {
          stars: true,
        },
      },
    },
    where: {
      id: pid,
    },
  });
  return response!._count;
}
