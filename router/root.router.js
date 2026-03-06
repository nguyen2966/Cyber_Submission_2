import express from "express";
import likeRouter from "./like.router.js";

export const rootRouter = express.Router();

rootRouter.use("like",likeRouter);