/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";

describe("userController", () => {
  
   let userController: UserController;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserRepository,UserService],
    }).compile();
  
   userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeCalled;
  });

});
