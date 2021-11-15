/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  ObjectIdColumn,
} from 'typeorm';
import { Hobby_passion_level } from './hobby-passion-level.enum';

@Entity()
export class Hobby extends BaseEntity {
  @ApiProperty()
  @ObjectIdColumn()
  hobbyId: string;

  @ApiProperty()
  @Column()
  passionLevel: Hobby_passion_level;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  year: number;

  @ApiProperty()
  @ManyToOne(() => User, (user) => user.hobbies)
  user: User;

  @ApiProperty()
  @Column()
  userId: string;
}
