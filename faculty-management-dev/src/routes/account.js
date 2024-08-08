import { Router } from "express";
import validation from "../validation";
import middlewares from "../middlewares";
import controllers from "../controllers";

const router = Router();
const { validateMiddleware, authMiddleware } = middlewares;
const { accountValidator } = validation;
const { accountController } = controllers;
router.post(
  "/admin/signIn",
  validateMiddleware({ schema: accountValidator.adminSignInSchema }),
  accountController.signIn
);


router.post(
  "/login",
  validateMiddleware({ schema: accountValidator.userSigninSchema }),
  accountController.userSignin
);
router.post(
  "/signup",
  validateMiddleware({ schema: accountValidator.userSignupSchema }),
  accountController.userSignup
);
router.post("/logout", authMiddleware, accountController.userLogout);
router.post("/updateProfile", accountController.updateProfile);
export default router;
