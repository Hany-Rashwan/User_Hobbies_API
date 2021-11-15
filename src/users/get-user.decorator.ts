import { ExecutionContext } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common";

// export const GetUser = createParamDecorator((data, req): User => {
//   console.log(req);
//   return req.user;
// })

//  developed decorator takes rquest as a pramater and return user data

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (!request.user) {
      return null;
    }

    return request.user;
  },
);
