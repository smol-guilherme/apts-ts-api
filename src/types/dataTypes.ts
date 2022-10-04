import * as models from "@prisma/client";

export type TUsersInsert = Omit<models.Users, "id">;

export interface IRegistryBody {
  email: string;
  password: string;
  username: string;
  profilePicture: string;
  repeatPassword?: string;
}

export type TPostsInsert = Omit<models.Posts, "id" | "createdAt" | "updatedAt">;
export type TPlacesInsert = Omit<
  models.Places,
  "id" | "createdAt" | "updatedAt"
>;

export interface IPostBody {
  title: string;
  description: string;
  location: number[];
  locationName: string;
  establishmentType: string;
}

export interface IPostsResponse {
  id: string;
  date: Date;
  title: string;
  description: string;
  author: IAuthorData;
  location: ILocationData;
  stars: number;
  likedBy: string[];
}

interface IAuthorData {
  authorId: string;
  username: string;
}

interface ILocationData {
  locationName: string;
  type: string;
  latitude: number;
  longitude: number;
}

export interface IError extends Error {
  details: IJoiError[];
  type: string;
  message: string;
}

export interface IJoiError {
  type: string;
  message: string;
  custom_message?: string;
}

export interface Hashtable<T> {
  [key: string]: T;
}

export const EstType: { [x: string]: "RESTAURANT" | "BAR" | "COFFEESHOP" } = {
  RESTAURANT: "RESTAURANT",
  BAR: "BAR",
  COFFEESHOP: "COFFEESHOP",
};

export type EstType = typeof EstType[keyof typeof EstType];
