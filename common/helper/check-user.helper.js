import { NotFoundException } from "./exception.helper.js";
import prisma from "../prisma/prisma.connect.js";

export const checkUserExist = async (userId)=>{
  const userExist = await prisma.user.findUnique({
    where:{
      user_id: +userId 
    }
  });

  if(!userExist) throw new NotFoundException("Bạn chưa có tài khoản trong hệ thống");
};