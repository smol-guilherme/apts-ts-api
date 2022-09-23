import { Request, Response } from "express";
import {
  signinRoutine,
  signupRoutine,
} from "../services/authenticationService";

export async function authController(req: Request, res: Response) {
  await signupRoutine(req.body);
  res.status(201).send();
  return;
}

export async function loginController(req: Request, res: Response) {
  const token = await signinRoutine(req.body, Number(res.locals.id)!);
  res.status(200).send({ token });
  return;
}
