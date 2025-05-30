import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { EmployeeModule } from './employee/employee.module';
import { BlogsService } from './blogs/blogs.service';
import { UsersNewController } from './usernew/usersnew.controller';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController, UsersController,UsersNewController],
  providers: [AppService, BlogsService],
})
export class AppModule {}
