import { Router } from "express";
import validation from "../validation";
import middlewares from "../middlewares";
import controllers from "../controllers";


const router=Router();
const {validateMiddleware,authMiddleware}=middlewares;
const{adminValidator}=validation;
const{adminController}=controllers;
router.post("/admin/updateProfile", authMiddleware,adminController.adminUpdateProfile );

export default router;