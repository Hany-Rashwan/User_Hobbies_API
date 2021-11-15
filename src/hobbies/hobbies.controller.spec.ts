/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { HobbyController } from "./hobbies.controller";
import {  HobbyService } from "./hobbies.service";
import { HobbyRepository } from "./hobby.repository";

describe("userController", () => {
  
   let hobbyController: HobbyController;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HobbyController],
      providers: [HobbyRepository,HobbyService],
    }).compile();
  
    hobbyController = module.get<HobbyController>(HobbyController);
  });

  it('should be defined', () => {
    expect(hobbyController).toBeCalled;
  });

});
