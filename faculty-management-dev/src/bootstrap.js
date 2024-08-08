import path from "path";
import bodyParser from "body-parser";
import models from "./models";
import routes from "./routes";
import express from "express";
import cors from "cors";
import accountRepository from "./repositories/account.repository";
export default class Bootstrap {
  constructor(app) {
    this.app = app;
    this.start();
    this.connectDb();
    this.middleware();
    this.routes();
  }

  start() {
    const { app } = this;
    const port = app.get("port");
    const server = app.listen(port, () => {
      console.log("Server has started on port", port);
    });
  }

  connectDb() {
    const { sequelize } = models;

    sequelize
      .authenticate()
      .then(() => {
        sequelize.sync().then((res) => {
          console.log("database sync");
        });
        console.log("database connected successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  middleware() {
    const { app } = this;
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, "public")));
    app.use("/public", express.static(`${__dirname}/../public`));
  }

  routes() {
    routes(this.app);
  }
}
