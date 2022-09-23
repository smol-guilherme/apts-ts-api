import { Router } from "express";
import { authController, loginController } from "../controllers/authController";
import { insertController } from "../controllers/productController";
import validateData from "../middlewares/joiValidationMiddleware";
import { validateToken } from "../middlewares/tokenValidation";
import { getProductsRoutine } from "../services/productService";

const router = Router();

router.post("/signup", validateData("signupSchema"), authController);
router.post("/signin", validateData("signinSchema"), loginController);
router.post(
  "/products",
  validateData("productSchema"),
  validateToken,
  insertController
);
router.get("/products", validateToken, getProductsRoutine);

export default router;
