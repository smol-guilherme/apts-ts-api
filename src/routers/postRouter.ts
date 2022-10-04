import { Router } from "express";
import {
  getController,
  insertController,
  reviewController,
} from "../controllers/postController";
import { validateToken } from "../middlewares/tokenValidation";
import validateData from "../middlewares/joiValidationMiddleware";

const postRouter = Router();

postRouter.post(
  "/posts",
  validateData("postSchema"),
  validateToken,
  insertController
);
postRouter.post(
  "/posts/star/:id",
  validateData("idSchema"),
  validateToken,
  reviewController
);
postRouter.get("/posts", validateToken, getController);

export default postRouter;
