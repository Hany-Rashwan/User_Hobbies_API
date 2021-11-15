/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, ObjectIdColumn, OneToMany, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Hobby } from "../hobbies/hobby.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
@Unique(['username'])
export class User extends BaseEntity
{
    @ApiProperty()
    @ObjectIdColumn()
    id:string;

    @ApiProperty()
    @Column()
    username:string;

    @ApiProperty()
    @Column()
    password:string;

    @ApiProperty({description:"salt for pa"})
    @Column()
    salt:string;

    @ApiProperty({description:"hobbies",required:true,type:[Hobby]})
    @OneToMany(() => Hobby, hobby => hobby.user)
    hobbies:Hobby[];

    async validatePassword(password:string) : Promise<boolean>
    {
        const hash = await bcrypt.hash(password,this.salt);
        return hash === this.password;
    }
}
