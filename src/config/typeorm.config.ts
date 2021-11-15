/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { Hobby } from "src/hobbies/hobby.entity";
// DB configuration object
export const typeOrmConfig : TypeOrmModuleOptions =  
{
    type: 'mongodb',
    host: process.env.LOCAL_MONGO_HOST,
    port: Number(process.env.DB_PORT),
    entities: [Hobby,User],
    useUnifiedTopology: true ,
    synchronize: true
};