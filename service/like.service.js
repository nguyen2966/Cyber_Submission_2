import { checkResExist } from "../common/helper/check-restaurant.helper.js";
import { checkUserExist } from "../common/helper/check-user.helper.js";
import { ForBiddenException } from "../common/helper/exception.helper.js";
import prisma from "../common/prisma/prisma.connect.js";

export const likeService = {
   async create(req) {
      const {userId, resId} = req.body;
      console.log({userId, resId});
      
      //Kiểm tra người dùng và nhà hàng có tồn tại trong hệ thống không
      await checkUserExist(userId);
      await checkResExist(resId);

      //Kiểm tra xem người dùng có ấn like lần nữa không
      const likeExist = await prisma.like_res.findFirst({
         where:{
            user_id:+userId,
            res_id:+resId
         }
      });

      if(likeExist) throw new ForBiddenException("Bạn đã like nhà hàng này rồi");

      await prisma.like_res.create({
         data:{
            res_id:+resId,
            user_id:+userId,
         }
      });
      return true;
   },

   async findAllUser(req) {
      const userId = req.params.id;
      await checkUserExist(userId);

      const result = await prisma.like_res.findMany({
         where:{
            user_id:+userId
         }
      });

      return result;
   },

   async findAllRes(req) {
      const resId = req.params.id;
      await checkResExist(resId);

      const result = await prisma.like_res.findMany({
         where:{
            res_id:+resId
         }
      });

      return result;
   },

   async unlike(req) {
      const {userId, resId} = req.body;
      console.log({userId, resId});
      
      //Kiểm tra người dùng và nhà hàng có tồn tại trong hệ thống không
      await checkUserExist(userId);
      await checkResExist(resId);

      //composite key
      const user_id_res_id = {
         user_id:1,
         res_id:10
      }
  

      //Kiểm tra xem người dùng đã ấn dislike chưa / lượt like có tồn tại chưa
      const checkUnLike = await prisma.like_res.findUnique({
         where:{
            user_id_res_id: user_id_res_id
         }
      });

      if(!checkUnLike) throw new ForBiddenException("Bạn chưa like nhà hàng lần nào");

      if(!checkUnLike.isLike) throw new ForBiddenException("Bạn đã ấn unlike rồi");

      await prisma.like_res.update({
         where:{
           user_id_res_id: user_id_res_id
         },
         data:{
            isLike:false
         }
      })

      return true;
   },

};