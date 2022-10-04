import { Posts } from "@prisma/client";
import { prisma } from "../database/database";
import { IPostsResponse, TPostsInsert } from "../types/dataTypes";

export async function findAll(filter?: string): Promise<IPostsResponse[]> {
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
    };
  });

  return newResponse;
}

export async function insert(data: TPostsInsert): Promise<Posts> {
  return await prisma.posts.create({ data });
}
