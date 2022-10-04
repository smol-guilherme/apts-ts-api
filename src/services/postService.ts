import * as posts from "../repositories/postRepository";
import { findById } from "../repositories/userRepository";
import { TPostsInsert } from "../types/dataTypes";

export async function insertRoutine(postData: TPostsInsert) {
  const findUser = await findById(postData.userId!);
  if (findUser === null) {
    throw { type: "not_found_error", message: "" };
  }
  await posts.insert(postData);
}

export async function getPostsRoutine() {
  return await posts.findAll();
}
