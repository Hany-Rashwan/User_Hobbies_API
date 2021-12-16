/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionRepository } from './transactions.repository';
import { TransactionController } from './transactions.controller';
import {TransactionService} from './transactions.service'

@Module({ 
    imports:[TypeOrmModule.forFeature([TransactionRepository])],
    controllers:[TransactionController] ,
    providers:[TransactionService]} )
export class TransactionsModule {}
