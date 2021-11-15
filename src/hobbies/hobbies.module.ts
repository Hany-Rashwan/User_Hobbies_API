/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { AuthModule } from '../auth/auth.module';
import { HobbyRepository } from './hobby.repository';
import { HobbyController } from './hobbies.controller';
import {HobbyService} from './hobbies.service'

@Module({ 
    imports:[TypeOrmModule.forFeature([HobbyRepository])],
    controllers:[HobbyController] ,
    providers:[HobbyService]} )
export class HobbiesModule {}
