 import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { EmployeeModule } from './employee/employee.module';
import { BlogsService } from './blogs/blogs.service';
import { UsersNewController } from './usernew/usersnew.controller';
import { RoleController } from './employee/role/role.controller';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { StudentModule } from './student/student.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { StudentController } from './student/student.controller';
import { LoginModule } from './login/login.module';
// import { LoginController } from './login/login.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',       
      port: 5432,
      username: 'postgres',    
      password: 'password',  
      database: 'testdb',     
      synchronize: true,
      autoLoadEntities: true,
    }),

    // ConfigModule.forRoot({ isGlobal: true }),   
    //  MongooseModule.forRoot(process.env.MONGO_URI!),
    // MongooseModule.forRoot('mongodb://localhost:27017/NestData'),
        // UsersModule,
        // ConfigModule.forRoot({ isGlobal: true }),
        // MongooseModule.forRoot('mongodb://localhost:27017/studentData'),
        // MongooseModule.forRoot(process.env.MONGO_URI!),
    StudentModule,

    AuthModule,

    CustomerModule,
    // LoginModule,
  ], 
   controllers: [AppController, UsersController,UsersNewController,RoleController],
  providers: [AppService, BlogsService],
})
export class AppModule {}
