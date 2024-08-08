import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const router = Router();
const {authMiddleware} = middlewares;
const {publicationController} = controllers;

router.post("/add-publication",authMiddleware,publicationController.savePublication);
router.get("/get-Publication/:userId",authMiddleware,publicationController.getPublicationByUser);
router.get("/get-Publication",authMiddleware,publicationController.getAllPublications);
router.post("/import-Publication",upload.single("file"),authMiddleware,publicationController.importPublication);




export default router;