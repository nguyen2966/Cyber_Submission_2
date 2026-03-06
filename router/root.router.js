import express from "express";
import likeRouter from "./like.router.js";
import rateRouter from "./rate.router.js";
import orderRouter from "./order.router.js";

export const rootRouter = express.Router();

rootRouter.use('/like',likeRouter);
rootRouter.use('/rate',rateRouter);
rootRouter.use('/order',orderRouter);