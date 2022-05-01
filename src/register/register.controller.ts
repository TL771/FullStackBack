import { Controller,Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private studentService:RegisterService){}
    @Get(':subjectID')
    async find(@Param('subjectID') subjectID:string):Promise<any>{
        if(subjectID.length === 9){
            let query = `SELECT * FROM class WHERE subject_id = '${subjectID}'`;
            return  await this.studentService.doSomeQuery(query);
        }
        return {error:true,msg:"Invalid subjectID"};
    }
}
