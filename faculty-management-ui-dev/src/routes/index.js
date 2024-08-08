import { Router } from "express";
import account from "../routes/account";
import media from "../routes/media";
import admin from "../routes/admin";
import publication from "../routes/publication"
import user from "./user";

const router = Router();
const register = (app) => {
  app.use(router);

  router.use("/api", [account, media, admin, user,publication]);
};
export default register;
