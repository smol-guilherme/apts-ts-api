import * as models from "@prisma/client";

export type TUsersInsert = Omit<models.Users, "id">;

export interface IRegistryBody {
  email: string;
  password: string;
  userName: string;
  profilePicture: string;
  repeatPassword?: string;
}

export type TProductsInsert = Omit<models.Products, "id">;

export interface IProductBody {
  productName: string;
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
