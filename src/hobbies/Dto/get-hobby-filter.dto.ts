/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { Hobby_passion_level } from "../hobby-passion-level.enum";

export class GetHobbiesFilterDto {
@ApiProperty()
@IsOptional()
@IsIn([Hobby_passion_level.Low,Hobby_passion_level.High,Hobby_passion_level.Very_High])
status: Hobby_passion_level;

@ApiProperty()
@IsOptional()
@IsNotEmpty()
search: string;

}