import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Login,DataSchema } from '../schemas/login.schemas';



@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Login.name, schema: DataSchema }
    ]),
  ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
