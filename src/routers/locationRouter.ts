import { Router } from "express";
import {
  getController,
  insertController,
  reviewController,
} from "../controllers/locationController";
import { validateToken } from "../middlewares/tokenValidation";
import validateData from "../middlewares/joiValidationMiddleware";

const locationRouter = Router();

// locationRouter.post(
//   "/places",
//   validateData("postSchema"),
//   validateToken,
//   insertController
// );
// locationRouter.post(
//   "/posts/star/:id",
//   validateData("idSchema"),
//   validateToken,
//   reviewController
// );
locationRouter.get("/places", validateToken, getController);

export default locationRouter;
