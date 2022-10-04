import * as models from "@prisma/client";

export type TUsersInsert = Omit<models.Users, "id">;

export interface IRegistryBody {
  email: string;
  password: string;
  userName: string;
  profilePicture: string;
  repeatPassword?: string;
}

export type TPostsInsert = Omit<models.Posts, "id" | "createdAt" | "updatedAt">;

export interface IPostBody {
  postName: string;
  pictureUrl: string;
  price: number;
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
