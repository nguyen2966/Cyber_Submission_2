import prisma from "../prisma/prisma.connect.js"
import { NotFoundException } from "./exception.helper.js";

export const checkResExist = async (resId) => {
  const resExist = await prisma.restaurant.findUnique({
    where:{
      res_id: +resId
    }
  });

  if(!resExist) throw new NotFoundException("Nhà hàng không tồn tại");
};