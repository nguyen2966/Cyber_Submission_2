import prisma from "../prisma/prisma.connect.js"
import { NotFoundException } from "./exception.helper.js";

export const checkFoodExist = async (foodId) => {
  const foodExist = await prisma.food.findUnique({
    where:{
      food_id:+foodId
    }
  });

  if(!foodExist) throw new NotFoundException("Món ăn không tồn tại");
};