import { BlogsService } from './../blogs/blogs.service';
import { Body, Controller,Get,Post,Param, Query, HttpCode} from '@nestjs/common';
// import {BlogService} from "../blogs/blogs.service";

@Controller('users')
export class UsersController {

    constructor (private blogsService : BlogsService){}
    
    @Get()
    userInfo(): string{
      return  "User name"
    }

    @Get('history')
    userHistory():object{
        return {id:'1', name: 'heokhlasgdo'}
    }


    @Post('add-user')
    adduser(@Body() record:any):string{
        console.log(record,'hkfkdkqvwjd')
        return   "hello how are you "
    }
       

    @Get('list/:id')
    // @HttpCode(204)
    useradd(@Param() record:any):string{
        console.log("bvkqjdb", record.id)
        return "list user check" + record.id
    }

    @Get('blog-list')
     async  bloglist():Promise<any[]>{
        return this.blogsService.findData();
    }
   
    @Post('blog-add')
    blogAdd(@Body() record:any){
        this.blogsService.create(record)
    // return   "lhgkfiychj"
    }
    // @Get('lists')
    // useradded(@Query() record:any):string{
    //     console.log("bvkqjdb", record.id)
    //     return "list user" + record.id
    // }
    // @Put('add-users')
    // addusers():string{
    //     return   "hello how are  "
    // }

}


