import validation from "../validation";
import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
const { mediaController } = controllers;
const router = Router();
const {validateMiddleware}=middlewares;
const{mediaValidator} = validation;

router.post(
    '/media/upload/:mediaFor/:mediaType',
    (req, res, next) => {
        Object.assign(req.params, {
            apiName: 'media',
        });
        next();
    },
    (req, res, next) => {
        const { params } = req;
        Object.assign(req.body, params);
        next();
    },
    validateMiddleware({
        schema:mediaValidator.uploadSchema
    }),
    mediaController.uploadMediaNew
    )



export default router;