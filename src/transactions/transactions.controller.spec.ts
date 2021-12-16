/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { TransactionController } from "./transactions.controller";
import {  TransactionService } from "./transactions.service";
import { TransactionRepository } from "./transactions.repository";

describe("userController", () => {
  
   let transactionController: TransactionController;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionController],
      providers: [TransactionRepository,TransactionService],
    }).compile();
  
    transactionController = module.get<TransactionController>(TransactionController);
  });

  it('should be defined', () => {
    expect(transactionController).toBeCalled;
  });

});
