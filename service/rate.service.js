import { checkResExist } from "../common/helper/check-restaurant.helper.js";
import { checkUserExist } from "../common/helper/check-user.helper.js";
import { ForBiddenException } from "../common/helper/exception.helper.js";
import prisma from "../common/prisma/prisma.connect.js";

export const rateService = {
   async create(req) {
      const {userId, resId, amount} = req.body;
      
      //Kiểm tra người dùng và nhà hàng có tồn tại trong hệ thống không
      await checkUserExist(userId);
      await checkResExist(resId);

      //Kiểm tra xem người dùng có ấn rate lần nữa không
      //findUniqe kết hợp composite key (userId,resId) cho kết quả nhanh hơn
      const rateExist = await prisma.rate_res.findUnique({
         where:{
            user_id_res_id:{
              user_id:+userId,
              res_id:+resId
            }
         }
      });

      if(rateExist) throw new ForBiddenException("Bạn đã rate nhà hàng này rồi");

      await prisma.rate_res.create({
         data:{
            res_id:+resId,
            user_id:+userId,
            amount: +amount
         }
      });
      return true;
   },

   async findAllUser(req) {
      const userId = req.params.id;
      await checkUserExist(userId);

      const result = await prisma.rate_res.findMany({
         where:{
            user_id:+userId
         }
      });

      return result;
   },

   async findAllRes(req) {
      const resId = req.params.id;
      await checkResExist(resId);

      const result = await prisma.rate_res.findMany({
         where:{
            res_id:+resId
         }
      });

      return result;
   }
};