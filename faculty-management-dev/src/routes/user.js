import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import validation from "../validation";
const router = Router();
const {authMiddleware,validateMiddleware} = middlewares;
const {userController} = controllers;
const {adminValidator}=validation;

router.post("/update-profile",authMiddleware,userController.updateProfile);
router.get("/get-users",authMiddleware,userController?.getAllUsers);
router.get("/get-faculty",authMiddleware,userController?.getFaculty);
router.get("/user/:id",userController?.getUser);
router.patch("/change-status/:id", validateMiddleware({ schema: adminValidator.changeStatusSchema }),userController.changeStatus)


export default router;