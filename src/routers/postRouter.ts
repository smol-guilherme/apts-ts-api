import { Router } from "express";
import { getController, insertController } from "../controllers/postController";
import validateData from "../middlewares/joiValidationMiddleware";
import { validateToken } from "../middlewares/tokenValidation";

const postRouter = Router();

postRouter.post(
  "/posts",
  validateData("postSchema"),
  validateToken,
  insertController
);
postRouter.get("/posts", validateToken, getController);

export default postRouter;
