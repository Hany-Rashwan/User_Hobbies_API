import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
//import { GetUser } from "./get-user.decorator";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { CreateUserDto } from "./Dto/create-user-dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOkResponse({ description: "User Created" })
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
    return await this.userService.createUser(createUserDto);
  }

  @Patch(":id")
  @ApiOkResponse({ description: "User Updated" })
  @UsePipes(ValidationPipe)
  async updateUser(
    @Param("id") id: string,
    @Body() createUserDto: CreateUserDto,
  ): Promise<void> {
    return await this.userService.updateUser(createUserDto, id);
  }

  @Delete(":id") // Delete User
  @ApiOkResponse({ description: " User Deleted" })
  async deleteUser(@Param("id") id: string): Promise<void> {
    await this.userService.deleteUser(id);
  }

  @Get(":id") // Get User by UserId
  @ApiOkResponse({ description: "User reteived" })
  async getHobbyById(@Param("id") id: string): Promise<User> {
    return await this.userService.getUserById(id);
  }

  @Get() // List All Users
  @ApiOkResponse({ description: "Users Listed" })
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
}
