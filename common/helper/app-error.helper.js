import { responseError } from "./sendResponse.helper.js"

export const errorHandler = (err,req,res,next) => {
  const response = responseError(err?.message, err?.code, err?.stack);
  res.status(response.statusCode).json(response);
};