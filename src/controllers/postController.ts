import { Request, Response } from "express";
import { getPostsRoutine, insertRoutine } from "../services/postService";

export async function insertController(req: Request, res: Response) {
  await insertRoutine(req.body, req.params.userId);
  res.status(201).send();
  return;
}

export async function getController(req: Request, res: Response) {
  const response = await getPostsRoutine();
  res.status(200).send(response);
  return;
}
