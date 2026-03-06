import { responseSuccess } from "../common/helper/sendResponse.helper.js";
import { rateService } from "../service/rate.service.js";

export const rateController = {
   async create(req, res, next) {
      try {
         const result = await rateService.create(req);
         const response = responseSuccess(result, `Tạo rate thành công`);
         res.status(response.statusCode).json(response);
      } catch (err) {
         next(err);
      }
   },

   async findAllUser(req, res, next) {
      try {
         const result = await rateService.findAllUser(req);
         const response = responseSuccess(result, `Lấy đánh giá cho user với id ${req.params.id} thành công`);
         res.status(response.statusCode).json(response);
      } catch (err) {
         next(err);
      }
   },

   async findAllRes(req, res, next) {
      try {
         const result = await rateService.findAllRes(req);
         const response = responseSuccess(result, `Lấy đánh giá cho restaurant với id ${req.params.id} thành công`);
         res.status(response.statusCode).json(response);
      } catch (err) {
         next(err);
      }
   }
};