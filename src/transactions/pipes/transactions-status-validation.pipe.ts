/* eslint-disable prettier/prettier */
import { ArgumentMetadata, PipeTransform} from '@nestjs/common';
 // custom validation class level validation (trnsforming input (letters to capital)
export class HobbyStatusValidationPipe implements PipeTransform {
      
       transform(value: any, metadata: ArgumentMetadata) {
      //  const  error  = this.isStatusValid(value);

        // if(error) {
        //     throw new BadRequestException('Invalid Input Data');
        // }
console.log("metadata:",metadata);
//console.log("value:",value);

        return value;
    }

    // private isStatusValid(level_value): boolean
    // {
    //     const idx = this.allowed_Levels.indexOf(level_value);
    //     return idx !== -1 ;  // conditional statments retruns true or false
    // }
} 

