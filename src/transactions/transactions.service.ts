/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateHobbyDto } from './Dto/create-transaction-dto';
//import { GetHobbiesFilterDto } from './Dto/get-hobby-filter.dto';
import { Transaction } from './transactions.entity';
import { TransactionRepository} from './transactions.repository';


@Injectable()
export class TransactionService {
  //--------------------------------------------------
  constructor( private transactionRepository: TransactionRepository) {}
//---------------Create Hobby-------------------------------------
async createTransaction(createHobbyDto:CreateHobbyDto):Promise<Transaction>{  
     return this.transactionRepository.creatTransaction(createHobbyDto);
}
//---------------Update Hobby--------------------------------------
async updateTransaction(hobbyId:string, createHobbyDto:CreateHobbyDto) : Promise<void>{
   return await this.transactionRepository.updateTransaction(hobbyId, createHobbyDto);
}
//--------------Delete Hobby---------------------------------------
async deleteTransaction(hobbyId:string) : Promise<void>{
   return await this.transactionRepository.deleteTransaction(hobbyId);
}
//--------------Get Hobby By ID--------------------------------
  async getTransactionById(hobbyId: string): Promise<Transaction> {
     return await this.transactionRepository.getTransactionById(hobbyId);
  }
//----------------Get All Hobbies----------------------------------------
  async getTransactions(): Promise<Transaction[]>{
    return this.transactionRepository.getTransactions();
}

//----------------Get All Hobbies for a user ----------------------------------------
// async getHobbiesbyUserId(id:string): Promise<Hobby[]>{
//   return this.hobbyRepository.getHobbiesbyUserId(id);
// }

}
