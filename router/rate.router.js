import express from 'express';
import { rateController } from '../controller/rate.controller.js';

const rateRouter = express.Router();

// Xử lí tạo rate nếu chưa có 
rateRouter.post('/make-rate', rateController.create);

//Lấy danh sách rate theo userid
rateRouter.get('/customer/:id', rateController.findAllUser);

//Lấy danh sách rate theo restaurant id
rateRouter.get('/restaurant/:id',rateController.findAllRes);

export default rateRouter;