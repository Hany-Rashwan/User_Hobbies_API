/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    
    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username:string;
   
    @ApiProperty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    password:string;

}