/* eslint-disable prettier/prettier */
import { ConflictException, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { AuthCredentialsDto } from "src/hobbies/Dto/auth-credentials-dto";
import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from "../users/Dto/create-user-dto";
import { Hobby } from "../hobbies/hobby.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>
{
    async createUser(createUserDto:CreateUserDto): Promise<void>
    {
        const {username,password} = createUserDto;

        const user = new User();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password,user.salt);

        try
        {
         await user.save();
       //  console.log(user.id+" with name: "+user.username+" "+"Created succelly");

        }
        catch(error)
        {
            if (error.code == 11000)     // 11000 error code for duplicated entries   "duplicated username for mongo"
            {
                throw new ConflictException ('Username already exists');
            }
            else
            {
                throw new InternalServerErrorException();
            }
           
        }  
       
    }

    
   async validateUserPassword(authCredentialsDto:AuthCredentialsDto): Promise<any>   // for sing-in
   {
       const {username,password}= authCredentialsDto;
       const user = await this.findOne({ username });

        if(user && await user.validatePassword(password))
       {
           return user;
       }
       else
       {
         return null;
       } 
   }

   private async hashPassword(password:string, salt:string): Promise<string>   // for hasing the password to DB
   {
       return await bcrypt.hash(password,salt);
   }


   async updateUser(createUserDto:CreateUserDto,id:string) : Promise<void>
   {
       const {username,password} =  createUserDto
       const updated_user=await this.getUserById(id);
       updated_user.username = username;
       updated_user.salt = await bcrypt.genSalt();
       updated_user.password = await this.hashPassword(password,updated_user.salt);
       await updated_user.save();
   }

   async deleteUser(id:string) : Promise<void>
   {
       const Result = await this.delete(id);
      

       if (Result.affected != 0) 
       {
        Hobby.delete({userId:id})
        console.log("deleeeeet");
       }
       throw new NotFoundException(`User With ID:${id} ...Not Found`);

   }

   async getUserById(id:string): Promise<User>
   {
        try {const Found = await this.findOne(id);

        if(!Found)
        {
           throw new NotFoundException(`User With ID:${id} ...Not Found`);
        }
  
        return Found;  
       }
       catch(error)
       {
         console.log(error);
         
       }
           
   }

     async getUsers(): Promise<User[]>
    {
         try {const Found = await this.find();

         if(!Found)
         {
            throw new NotFoundException(`No Users Found`);
         }
   
         return Found;  
        }
        catch(error)
        {
          console.log(error);
          
        }
            
    }

  


}