import { Module } from '@nestjs/common';
import { RoleController } from './role/role.controller';

@Module({
  controllers: [RoleController],
 
})
export class EmployeeModule {}
