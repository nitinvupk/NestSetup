import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { UserSchema,User } from 'src/schemas/users.schema';
import { UserSchema,User } from 'src/models/User.model';
import {UsersController} from "./users.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  // exports: [UsersService],
  controllers:[UsersController],
  // providers: [UsersService],
  
})
export class UsersModule {}
