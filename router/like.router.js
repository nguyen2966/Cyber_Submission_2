import express from 'express';
import { likeController } from '../controller/like.controller.js';

const likeRouter = express.Router();

// Xử lí tạo like nếu chưa có 
likeRouter.post('/make-like', likeController.create);

//Lấy danh sách like theo userid
likeRouter.get('/customer/:id', likeController.findAllUser);

//Lấy danh sách like theo restaurant id
likeRouter.get('/restaurant/:id',likeController.findAllRes);

//xử lí unlike
likeRouter.put('/unlike',likeController.unlike);


export default likeRouter;