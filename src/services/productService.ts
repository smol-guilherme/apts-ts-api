import * as products from "../repositories/productRepository";
import { findById } from "../repositories/userRepository";
import { TProductsInsert } from "../types/dataTypes";

export async function insertRoutine(productData: TProductsInsert) {
  const findUser = await findById(productData.userId!);
  if (findUser === null) {
    throw { type: "not_found_error", message: "" };
  }
  await products.insert(productData);
}

export async function getProductsRoutine() {
  return await products.findAll();
}
