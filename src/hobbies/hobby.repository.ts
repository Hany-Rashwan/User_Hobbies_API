import { NotFoundException } from "@nestjs/common";
//import { User } from '../users/user.entity';
import { EntityRepository, Repository } from "typeorm";
import { CreateHobbyDto } from "./Dto/create-hobby-dto";
//import { GetHobbiesFilterDto} from './Dto/get-hobby-filter.dto';
import { Hobby } from "./hobby.entity";

@EntityRepository(Hobby)
export class HobbyRepository extends Repository<Hobby> {
  //====================Create=Hobby===============================
  async createHobby(createHobbyDto: CreateHobbyDto): Promise<Hobby> {
    const { userId, name, year, passionLevel } = createHobbyDto;
    const hobby = new Hobby();
    hobby.passionLevel = passionLevel;
    hobby.name = name;
    hobby.year = year;
    hobby.userId = userId;
    await hobby.save();
    return hobby;
  }
  //===================Update=Hobby===============================
  async updateHobby(
    hobbyId: string,
    createHobbyDto: CreateHobbyDto,
  ): Promise<void> {
    const { passionLevel, name, year, userId } = createHobbyDto;
    const hobby = await this.getHobbyById(hobbyId);
    hobby.passionLevel = passionLevel;
    hobby.name = name;
    hobby.year = year;
    hobby.userId = userId;
    await hobby.save();
  }
  //==================Delete=Hobby==================================
  async deleteHobby(hobbyId: string): Promise<void> {
    const Result = await this.delete(hobbyId);

    if (Result.affected === 0) {
      throw new NotFoundException(`Hobby With ID:${hobbyId} ...Not Found`);
    }
  }
  //====================GET=Hobby=By=ID=============================
  async getHobbyById(hobbyId: string): Promise<Hobby> {
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
  async getHobbies(): Promise<Hobby[]> {
    try {
      const Found = await this.find();

      if (!Found) {
        throw new NotFoundException(`No Hobbies Found`);
      }

      return Found;
    } catch (error) {
      console.log(error);
    }
  }
  //====================GET All Hobbies =============================
  async getHobbiesbyUserId(id: string): Promise<Hobby[]> {
    try {
      console.log(id);
      const Found = await this.find({ userId: id });

      if (!Found) {
        throw new NotFoundException(`No Hobbies Found`);
      }

      return Found;
    } catch (error) {
      console.log(error);
    }
  }
}
