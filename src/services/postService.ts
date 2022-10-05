import { Establishments } from "@prisma/client";
import { findStarred, upvote } from "../repositories/interactionRepository";
import {
  createLocation,
  findByCoordinates,
} from "../repositories/locationRepository";
import * as posts from "../repositories/postRepository";
import { findById } from "../repositories/userRepository";
import {
  EstType,
  IPostBody,
  TPlacesInsert,
  TPostsInsert,
} from "../types/dataTypes";

export async function insertRoutine(postData: IPostBody, userId: string) {
  const findUser = await findUserByUUID(userId);
  let locationFound = await findByCoordinates(postData.location);
  if (locationFound === null) {
    locationFound = await createNewLocation({
      locationName: postData.locationName,
      latitude: postData.location[0],
      longitude: postData.location[1],
      type: handleEstablishmentTypeConversion(postData.establishmentType),
    });
  }
  const insertData: TPostsInsert = {
    title: postData.title,
    description: postData.description,
    locationId: locationFound.id!,
    authorId: userId,
  };
  console.log(insertData);

  await posts.insert(insertData);
}

export async function getPostsRoutine(userId: string) {
  return await posts.findAll(userId);
}

export async function starPostRoutine(postId: string, userId: string) {
  await findUserByUUID(userId);
  await findPostByUUID(postId);
  if (findStarred(userId, postId))
    // const response = ;
    // console.log(response);

    return await upvote(postId, userId);
}

async function createNewLocation(data: TPlacesInsert) {
  return await createLocation(data);
}

async function findUserByUUID(uid: string) {
  const query = await findById(uid);
  if (query === null) {
    throw {
      type: "not_found_error",
      message: "User does not exist or id is in the wrong format.",
    };
  }
  return query;
}

async function findPostByUUID(pid: string) {
  const query = await posts.findByUUID(pid);
  if (query === null) {
    throw {
      type: "not_found_error",
      message: "Post does not exist or id is in the wrong format.",
    };
  }
  return query;
}

function handleEstablishmentTypeConversion(type: string): EstType {
  const convertedData: keyof typeof Establishments = type
    .replaceAll(" ", "")
    .toUpperCase() as keyof typeof Establishments;
  if (Establishments[convertedData] !== undefined) return convertedData;
  throw {
    type: "wrong_format_error",
    message: "The establishment type is not valid.",
  };
}
