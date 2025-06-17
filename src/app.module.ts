import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { EmployeeModule } from './employee/employee.module';
import { BlogsService } from './blogs/blogs.service';
import { UsersNewController } from './usernew/usersnew.controller';
import { RoleController } from './employee/role/role.controller';
import { MongooseModule } from '@nestjs/mongoose';
// import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { StudentModule } from './student/student.module';
import { ConfigModule } from '@nestjs/config';
// import { StudentController } from './student/student.controller';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),   
    //  MongooseModule.forRoot(process.env.MONGO_URI!),
    // MongooseModule.forRoot('mongodb://localhost:27017/NestData'),
        // UsersModule,
    StudentModule,
    LoginModule,
  ], 
   controllers: [AppController, UsersController,UsersNewController,RoleController],
  providers: [AppService, BlogsService],
})
export class AppModule {}
