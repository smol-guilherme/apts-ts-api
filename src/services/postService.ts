import { Establishments } from "@prisma/client";
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
  const findUser = await findById(userId);
  if (findUser === null) {
    throw { type: "not_found_error", message: "" };
  }
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
  await posts.insert(insertData);
}

export async function getPostsRoutine() {
  return await posts.findAll();
}

async function createNewLocation(data: TPlacesInsert) {
  return await createLocation(data);
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
