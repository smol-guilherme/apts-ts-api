import { Request, Response } from "express";
import { getProductsRoutine, insertRoutine } from "../services/productService";

export async function insertController(req: Request, res: Response) {
  await insertRoutine(req.body);
  res.status(201).send();
  return;
}

export async function getController(req: Request, res: Response) {
  const response = await getProductsRoutine();
  res.status(200).send(response);
  return;
}
