/* eslint-disable prettier/prettier */
import {
  Body,
  Post,
  Get,
  Controller,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
 // UseGuards,
} from '@nestjs/common';
import { CreateHobbyDto } from './Dto/create-hobby-dto';
import { Hobby } from './hobby.entity';
//import { AuthGuard } from '@nestjs/passport';
import { HobbyService } from './hobbies.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';

@Controller('hobby')
//@UseGuards(AuthGuard())
@ApiBearerAuth('access-token')
export class HobbyController {
//----------------------------Constructor------------------------------
  constructor(private readonly hobbiesService: HobbyService) {}
//---------------------------------------------------------------------

//-----------------------Create-Hobby---------------------------------------------------
@Post()
@ApiOkResponse({ description: 'Create Hobby' })
@UsePipes(ValidationPipe)
  async createHobby(
    @Body() createHobbyDto: CreateHobbyDto,
  ): Promise<Hobby> {

    return await this.hobbiesService.createHobby(createHobbyDto);
  }
//---------------------Update-Hobby----------------------------------------------------
@Patch()
@ApiOkResponse({ description: 'Hobby Updated' })
@UsePipes(ValidationPipe) 
async updateHobby(
    @Param('hobbyId') hobbyId: string,
    @Body() createHobbyDto: CreateHobbyDto,
  ): Promise<void> {
    return await this.hobbiesService.updateHobby(hobbyId,createHobbyDto);
  }
//----------------------Delete-Hobby-----------------------------------------------------
@Delete(':hobbyId')
@ApiOkResponse({ description: 'Hobby Deleted' })
  async deleteHobby(
    @Param('hobbyId') hobbyId: string,
  ): Promise<void> {
    await this.hobbiesService.deleteHobby(hobbyId);
  }
//------------------------Get-Hobby-By-ID---------------------------------------------------
@Get(':hobbyId')
@ApiOkResponse({ description: 'Hobby Reteived' })
  async getHobbyById(
    @Param('hobbyId') hobbyId: string,    
  ): Promise<Hobby> {
    return await this.hobbiesService.getHobbyById(hobbyId);
    }
//--------------Get All Hobbies || Get All Hobbies With Filter------------------------------------
@Get()
@ApiOkResponse({ description: 'Hobbies Listed' })
  async getHobbies(
  ): Promise<Hobby[]> {
    return this.hobbiesService.getHobbies();
  }
//-------------- Get All Hobbies for a User (Front-End) ------------------------------------
@Get('/userHobbies/:user_id')
@ApiOkResponse({ description: 'User Hobbies (Front-End)' })
  async getHobbiesbyUserId(    
  @Param('user_id') id: string,    
  ): Promise<Hobby[]> {
    return this.hobbiesService.getHobbiesbyUserId(id);
  }
}
//======================================================================================================//