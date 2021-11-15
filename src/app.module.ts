import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { HobbiesModule } from "./hobbies/hobbies.module";
import { UserModule } from "./users/user.module";
import { UserController } from "./users/user.controller";

//Application Root module
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), HobbiesModule, UserModule],
  controllers: [UserController],
})
export class AppModule {}
