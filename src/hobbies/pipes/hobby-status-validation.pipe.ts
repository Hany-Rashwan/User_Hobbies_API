/* eslint-disable prettier/prettier */
import { ArgumentMetadata, BadRequestException, PipeTransform} from '@nestjs/common';
import { Hobby_passion_level } from '../hobby-passion-level.enum';
 // custom validation class level validation (trnsforming input (letters to capital)
export class HobbyStatusValidationPipe implements PipeTransform {
       constructor(readonly allowed_Levels =  [Hobby_passion_level.Low,Hobby_passion_level.Medium, Hobby_passion_level.High, Hobby_passion_level.Very_High])
       {}

   
       transform(value: any, metadata: ArgumentMetadata) {
        const  error  = this.isStatusValid(value);

        if(error) {
            throw new BadRequestException('Invalid Input Data');
        }
console.log("metadata:",metadata);
//console.log("value:",value);

        return value;
    }

    private isStatusValid(level_value): boolean
    {
        const idx = this.allowed_Levels.indexOf(level_value);
        return idx !== -1 ;  // conditional statments retruns true or false
    }
} 

