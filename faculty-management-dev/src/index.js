import express from "express"
import dotenv from "dotenv"
import Bootstrap from "./bootstrap";

const app=express();
 
dotenv.config();

app.set('port', process.env.PORT || 7000);
const bootstrap = new Bootstrap(app);
