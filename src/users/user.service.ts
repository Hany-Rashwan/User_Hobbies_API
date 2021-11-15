import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./Dto/create-user-dto";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  //--------------- Create User ------------------------------------
  async createUser(createUserDto: CreateUserDto): Promise<void> {
    return this.userRepository.createUser(createUserDto);
  }
  //--------------- Update User ------------------------------------
  async updateUser(createUserDto: CreateUserDto, id: string): Promise<void> {
    return this.userRepository.updateUser(createUserDto, id);
  }
  //------------- Delete Hobby -------------------------------------
  async deleteUser(id: string): Promise<void> {
    return await this.userRepository.deleteUser(id);
  }
  //------------- Get User by Id -----------------------------------
  async getUserById(id: string): Promise<User> {
    return await this.userRepository.getUserById(id);
  }
  //--------------List Users----------------------------------------
  async getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
