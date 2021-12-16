/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
   Entity,
} from 'typeorm';

@Entity()
 export class Transaction extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  hobbyId: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  year: number;

}

// CREATE TABLE `transaction` ( `
// id` int(11) NOT NULL AUTO_INCREMENT, 
// `transaction_type_id` int(11) NOT NULL,
// `created_at` timestamp NOT NULL DEFAULT current_timestamp(), 
// `coin_id` int(11) NOT NULL,
// `user_id` int(11) DEFAULT NULL,
// `output_index` int(10) NOT NULL,
// `transaction_id` varchar(100) COLLATE utf8mb4_bin NOT NULL, 
// `amount` decimal(40,20) NOT NULL, 
// `smart_contract_id` int(11) DEFAULT NULL,
// `is_confirmed` tinyint(1) NOT NULL DEFAULT 0,
// `eos_transaction_id` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
//    PRIMARY KEY (`id`),
//   UNIQUE KEY `transaction` (`transaction_type_id`,`coin_id`,`transaction_id`,`output_index`) ) 
//   ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;