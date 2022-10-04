import { Request, Response } from "express";
import {
  getPostsRoutine,
  insertRoutine,
  starPostRoutine,
} from "../services/postService";

export async function insertController(req: Request, res: Response) {
  const { id } = res.locals.id!;
  await insertRoutine(req.body, id);
  res.status(201).send();
  return;
}

export async function reviewController(req: Request, res: Response) {
  const { id: postId } = req.params;
  const { id: userId } = res.locals.id!;
  await starPostRoutine(postId, userId);
  res.status(200).send();
  return;
}

export async function getController(req: Request, res: Response) {
  const { id } = res.locals.id!;
  const response = await getPostsRoutine(id);
  res.status(200).send(response);
  return;
}
