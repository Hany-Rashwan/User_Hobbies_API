/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateHobbyDto } from './Dto/create-hobby-dto';
//import { GetHobbiesFilterDto } from './Dto/get-hobby-filter.dto';
import { Hobby } from './hobby.entity';
import { HobbyRepository } from './hobby.repository';


@Injectable()
export class HobbyService {
  //--------------------------------------------------
  constructor( private hobbyRepository: HobbyRepository) {}
//---------------Create Hobby-------------------------------------
async createHobby(createHobbyDto:CreateHobbyDto):Promise<Hobby>{  
     return this.hobbyRepository.createHobby(createHobbyDto);
}
//---------------Update Hobby--------------------------------------
async updateHobby(hobbyId:string, createHobbyDto:CreateHobbyDto) : Promise<void>{
   return await this.hobbyRepository.updateHobby(hobbyId, createHobbyDto);
}
//--------------Delete Hobby---------------------------------------
async deleteHobby(hobbyId:string) : Promise<void>{
   return await this.hobbyRepository.deleteHobby(hobbyId);
}
//--------------Get Hobby By ID--------------------------------
  async getHobbyById(hobbyId: string): Promise<Hobby> {
     return await this.hobbyRepository.getHobbyById(hobbyId);
  }
//----------------Get All Hobbies----------------------------------------
  async getHobbies(): Promise<Hobby[]>{
    return this.hobbyRepository.getHobbies();
}

//----------------Get All Hobbies for a user ----------------------------------------
async getHobbiesbyUserId(id:string): Promise<Hobby[]>{
  return this.hobbyRepository.getHobbiesbyUserId(id);
}

}
