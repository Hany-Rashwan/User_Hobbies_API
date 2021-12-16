import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./config/typeorm.config";
import { TransactionsModule } from "./transactions/transactions.module";
import { ConfigModule } from "@nestjs/config";

//Application Root module
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    TransactionsModule,
  ],
})
export class AppModule {}
