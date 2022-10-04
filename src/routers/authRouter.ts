import { Router } from "express";
import { authController, loginController } from "../controllers/authController";
import validateData from "../middlewares/joiValidationMiddleware";

const authRouter = Router();

authRouter.post("/signup", validateData("signupSchema"), authController);
authRouter.post("/signin", validateData("signinSchema"), loginController);

export default authRouter;
