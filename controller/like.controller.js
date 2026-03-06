import { responseSuccess } from "../common/helper/sendResponse.helper.js";
import { likeService } from "../service/like.service.js";

export const likeController = {
   async create(req, res, next) {
      try {
         const result = await likeService.create(req);
         const response = responseSuccess(result, `Ấn like thành công`);
         res.status(response.statusCode).json(response);
      } catch (err) {
         next(err);
      }
   },

   async findAllUser(req, res, next) {
      try {
         const result = await likeService.findAllUser(req);
         const response = responseSuccess(result, `Get like for user with id ${req.params.id} successfully`);
         res.status(response.statusCode).json(response);
      } catch (err) {
         next(err);
      }
   },

   async findAllRes(req, res, next) {
      try {
         const result = await likeService.findAllRes(req);
         const response = responseSuccess(result, `Get like for restaurant with id ${req.params.id} successfully`);
         res.status(response.statusCode).json(response);
      } catch (err) {
         next(err);
      }
   },

   async unlike(req,res,next) {
    try{
      const result = await likeService.unlike(req);
      const response = responseSuccess(result, `Unlike successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  } 
};