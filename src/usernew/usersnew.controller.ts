import { BlogsService } from './../blogs/blogs.service';
import { Body, Controller,Get,Post,Param,Patch, Query, HttpCode, Put, Delete} from '@nestjs/common';
// import {BlogService} from "../blogs/blogs.service";

@Controller('usersnew')
export class UsersNewController {

    // constructor (private blogsService : BlogsService){}


    @Get()
    findAll(@Query('role') role ? : 'Intern' | 'Engineer'){
        console.log('findAll',role)

        return []
    }

    @Get(':id')
    findOne(@Param('id') id: string ){
        return {id}
    }

    @Get('interns')
    findAllInterns(){
        console.log('findAll')

        return []
    }

    @Post()
    create(@Body() user: {}){
        console.log('created',user)
        return user
    }

    @Patch(':id')
    update(@Param('id') id : string, @Body() userUpdate: {}){
        console.log('updated',userUpdate)

        return { id, ...userUpdate}
    }

    @Delete (':id')
    delete(@Param('id') id : string){
        console.log('deleted',id)
        return {id}
    }

}


