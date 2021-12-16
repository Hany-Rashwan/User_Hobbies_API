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
import { CreateHobbyDto } from './Dto/create-transaction-dto';
import { Transaction } from './transactions.entity';
//import { AuthGuard } from '@nestjs/passport';
import { TransactionService } from './transactions.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';

@Controller('Transactions')
//@UseGuards(AuthGuard())
@ApiBearerAuth('access-token')
export class TransactionController {
//----------------------------Constructor------------------------------
  constructor(private readonly hobbiesService: TransactionService) {}
//---------------------------------------------------------------------

//-----------------------Create-Hobby---------------------------------------------------
@Post()
@ApiOkResponse({ description: 'Create Transaction' })
@UsePipes(ValidationPipe)
  async createTransaction(
    @Body() createHobbyDto: CreateHobbyDto,
  ): Promise<Transaction> {

    return await this.hobbiesService.createTransaction(createHobbyDto);
  }
//---------------------Update-Hobby----------------------------------------------------
@Patch()
@ApiOkResponse({ description: 'Transaction Updated' })
@UsePipes(ValidationPipe) 
async updateTransaction(
    @Param('hobbyId') hobbyId: string,
    @Body() createHobbyDto: CreateHobbyDto,
  ): Promise<void> {
    return await this.hobbiesService.updateTransaction(hobbyId,createHobbyDto);
  }
//----------------------Delete-Hobby-----------------------------------------------------
@Delete(':hobbyId')
@ApiOkResponse({ description: 'Transaction Deleted' })
  async deleteTransaction(
    @Param('hobbyId') hobbyId: string,
  ): Promise<void> {
    await this.hobbiesService.deleteTransaction(hobbyId);
  }
//------------------------Get-Hobby-By-ID---------------------------------------------------
@Get(':hobbyId')
@ApiOkResponse({ description: 'Transaction Reteived' })
  async getTransactionById(
    @Param('hobbyId') hobbyId: string,    
  ): Promise<Transaction> {
    return await this.hobbiesService.getTransactionById(hobbyId);
    }
//--------------Get All Hobbies || Get All Hobbies With Filter------------------------------------
@Get()
@ApiOkResponse({ description: 'Transactions Listed' })
  async getTransactions(
  ): Promise<Transaction[]> {
    return this.hobbiesService.getTransactions();
  }
//-------------- Get All Hobbies for a User (Front-End) ------------------------------------
// @Get('/userHobbies/:user_id')
// @ApiOkResponse({ description: 'User Hobbies (Front-End)' })
//   async getHobbiesbyUserId(    
//   @Param('user_id') id: string,    
//   ): Promise<Hobby[]> {
//     return this.hobbiesService.getHobbiesbyUserId(id);
//   }
 }
//======================================================================================================//