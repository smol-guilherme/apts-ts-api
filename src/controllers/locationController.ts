import { Request, Response } from "express";
import { getNearbyMarkersRoutine } from "../services/locationService";

export async function insertController(req: Request, res: Response) {
  const { id } = res.locals.id!;
  res.status(201).send();
  return;
}

export async function reviewController(req: Request, res: Response) {
  const { id: postId } = req.params;
  const { id: userId } = res.locals.id!;
  // res.status(200).send({ count: stars });
  return;
}

export async function getController(req: Request, res: Response) {
  const { id: userId } = res.locals.id!;
  const { lat, lng } = req.query;
  const coordinates = [Number(lat), Number(lng)];
  const response = await getNearbyMarkersRoutine(coordinates, userId);
  res.status(200).send(response);
  return;
}
