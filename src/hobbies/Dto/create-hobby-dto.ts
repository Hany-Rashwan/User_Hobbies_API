import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty } from "class-validator";
import { Hobby_level, Hobby_passion_level } from "../hobby-passion-level.enum";

export class CreateHobbyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsIn(Hobby_level)
  passionLevel: Hobby_passion_level;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  year: number;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;
}
