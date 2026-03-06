import { checkFoodExist } from "../common/helper/check-food.helper.js";
import { checkUserExist } from "../common/helper/check-user.helper.js";
import prisma from "../common/prisma/prisma.connect.js";

export const orderService = {
   async create(req) {
      const {foodId, userId, amount} = req.body;
      
      //Kiểm tra người dùng và món ăn có tồn tại trong hệ thống không
      await checkUserExist(userId);
      await checkFoodExist(foodId);

      await prisma.order.create({
         data:{
            food_id: +foodId,
            user_id: +userId,
            amount: +amount
         }
      });
      return true;
   },

   async findAll(req) {
      const userId = req.params.id;
      await checkUserExist(userId);

      const result = await prisma.order.findMany({
         where:{
            user_id:+userId
         }
      });

      return result;
   }
};