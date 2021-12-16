import { NotFoundException } from "@nestjs/common";
//import { User } from '../users/user.entity';
import { EntityRepository, Repository } from "typeorm";
import { CreateHobbyDto } from "./Dto/create-transaction-dto";
//import { GetHobbiesFilterDto} from './Dto/get-hobby-filter.dto';
import { Transaction } from "./transactions.entity";

@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {
  //====================Create=Hobby===============================
  async creatTransaction(createHobbyDto: CreateHobbyDto): Promise<Transaction> {
    const { name, year } = createHobbyDto;
    const hobby = new Transaction();
    hobby.name = name;
    hobby.year = year;
    await hobby.save();
    return hobby;
  }
  //===================Update=Hobby===============================
  async updateTransaction(
    hobbyId: string,
    createHobbyDto: CreateHobbyDto,
  ): Promise<void> {
    const { name, year } = createHobbyDto;
    const hobby = await this.getTransactionById(hobbyId);
    hobby.name = name;
    hobby.year = year;
    await hobby.save();
  }
  //==================Delete=Hobby==================================
  async deleteTransaction(hobbyId: string): Promise<void> {
    const Result = await this.delete(hobbyId);

    if (Result.affected === 0) {
      throw new NotFoundException(`Hobby With ID:${hobbyId} ...Not Found`);
    }
  }
  //====================GET=Hobby=By=ID=============================
  async getTransactionById(hobbyId: string): Promise<Transaction> {
    try {
      const Found = await this.findOne(hobbyId);

      if (!Found) {
        throw new NotFoundException(`Hobby With ID:${hobbyId} ...Not Found`);
      }

      return Found;
    } catch (error) {
      console.log(error);
    }
  }
  //====================GET All Hobbies =============================
  async getTransactions(): Promise<Transaction[]> {
    try {
      const Found = await this.find();

      if (!Found) {
        throw new NotFoundException(`No Transactions Found`);
      }

      return Found;
    } catch (error) {
      console.log(error);
    }
  }
  //====================GET All Hobbies =============================
  // async getHobbiesbyUserId(id: string): Promise<Hobby[]> {
  //   try {
  //     console.log(id);
  //     const Found = await this.find(hobbyId);

  //     if (!Found) {
  //       throw new NotFoundException(`No Hobbies Found`);
  //     }

  //     return Found;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
