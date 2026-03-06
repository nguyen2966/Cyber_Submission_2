import { statusCodes } from "./status-code.helper.js";

export const responseSuccess = (data, message="OK", statusCode = statusCodes.OK) => {
  return {
    status:"success",
    statusCode: statusCode,
    message: message,
    data: data,
    doc: "swagger/api"
  };
} 

export const responseError = (message="Internal Server Error", statusCode = statusCodes.INTERNAL_SERVER_ERROR, stack) => {
  return {
    status:"error",
    statusCode: statusCode,
    message: message,
    doc: "swagger/api"
  };
} 