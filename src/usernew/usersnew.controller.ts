import { BlogsService } from './../blogs/blogs.service';
import { Body, Controller,Get,Post,Param,Patch, Query, HttpCode, Put, Delete} from '@nestjs/common';
// import {BlogService} from "../blogs/blogs.service";
import { CreateUser } from '../dto/create-user.dto';


let USERS: CreateUser[] = [];

@Controller('usersnew')
export class UsersNewController {

    // constructor (private blogsService : BlogsService){}


    // @Get()
    // findAll(@Query('role') role ? : 'Intern' | 'Engineer'){
    //     console.log('findAll',role)

    //     return []
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string ){
    //     return {id}
    // }

    // @Get('interns')
    // findAllInterns(){
    //     console.log('findAll')

    //     return []
    // }

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


    @Post()
    addUser(@Body('id') createUserDtos : CreateUser ){
        USERS.push(createUserDtos);
        return 'User added'
    }

    @Get()
    getUser(){
        console.log('get data', USERS)
        return USERS;
    }

    @Get(':id')
    getId(@Param( 'id')id: number){
        console.log("getid data", id)
      return USERS.find((user) => +user.id === +id)
    }

    @Put(':id')
    updateData(@Param('id') id:number, @Body() updateUserDto: CreateUser){
        console.log('updateddata ', updateUserDto,id)
        const userIndex = USERS.findIndex((user) => +user.id === +id);

        if(!userIndex){
            return ''
        }
        USERS[userIndex] = updateUserDto;

    }

    @Delete(':id')
    deleteData(@Param('id')  id:number){
        console.log('delete id',id)
        USERS = USERS.filter((user)=> user.id === id);
        
    }
}

//    providers Types Nestjs =  class based and it is used in dependency
    //   Non class based types means number, boolean, function, string and 
    // object array dependency ke use in injectable krwa skte hai 
    // factory type= factory function and asyn factory funcytion used in use cases likes dynamic and condittionally values andclass instance

    // Injection types  = constructor injection   use = constructor(@inject(Account) account){...}, property injection
