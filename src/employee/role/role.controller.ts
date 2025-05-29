import { Controller, Get } from '@nestjs/common';

@Controller('role')
export class RoleController {

   @Get()
   employe():string{
    return 'hello shivam'
   }

   @Get('userid')
   employes():object{
    console.log('log13------')
    return {id:'3',name:'hello shivam'}
   }

}
