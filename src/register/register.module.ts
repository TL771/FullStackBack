import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';


@Module({
  providers: [RegisterService],
  controllers: [RegisterController],
  exports: [RegisterService]
})
export class RegisterModule {}
