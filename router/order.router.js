import express from "express";
import { orderController } from "../controller/order.controller.js";

const orderRouter = new express.Router();

//Lấy toàn bộ order của 1 user
orderRouter.get('/user/:id',orderController.findAll);

//user tạo order 
orderRouter.post('/make-order', orderController.create);

export default orderRouter;