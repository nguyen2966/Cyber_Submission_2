import { statusCodes } from "./status-code.helper.js";

//400
export class BadRequestException extends Error{
  code = statusCodes.BAD_REQUEST;
  name = "BadRequestException";
  constructor(message = "BadRequestException"){
    super(message);
  }
};

//401
export class UnAuthorizedException extends Error {
  code = statusCodes.UNAUTHORIZED;
  name = "UnAuthorizedException";
  constructor (message = "UnAuthorizedException"){
    super(message);
  }
}

//403
export class ForBiddenException extends Error{
  code = statusCodes.FORBIDDEN;
  name = "ForbiddenException";
  constructor(message = "ForbiddenException"){
    super(message);
  }
};


//404
export class NotFoundException extends Error {
  code = statusCodes.NOT_FOUND;
  name = "NotFoundException";
  constructor(message = "NotFoundException"){
    super(message);
  }
};

