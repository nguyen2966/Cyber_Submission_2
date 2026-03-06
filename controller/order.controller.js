import { responseSuccess } from "../common/helper/sendResponse.helper.js";
import { orderService } from "../service/order.service.js";

export const orderController = {
   async create(req, res, next) {
      try {
         const result = await orderService.create(req);
         const response = responseSuccess(result, `Tạo order thành công`);
         res.status(response.statusCode).json(response);
      } catch (err) {
         next(err);
      }
   },

   async findAll(req, res, next) {
      try {
         const result = await orderService.findAll(req);
         const response = responseSuccess(result, `Lấy order cho user với id ${req.params.id} thành công`);
         res.status(response.statusCode).json(response);
      } catch (err) {
         next(err);
      }
   }
};