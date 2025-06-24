import {  InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
// import { User, UserDocument} from 'src/schemas/users.schema';
import { User,UserDocument } from 'src/models/User.model';
import { Model } from 'mongoose';
import { CreateUser } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private  User : Model <User>){}

   async create (createUserDto: CreateUser){

    try{
      const user = await this.User.create(createUserDto);
      return user;

    } catch(error){
      if(error.name === "validationError"){
        throw new BadRequestException(error.name)
      }
      throw new ServiceUnavailableException();
    }
   }

   async findAll(){
    const users= await this.User.find()
    return users;
   }

   async findOne(id: string){
    const users= await this.User.findById(id)
    if(users){
       throw new NotFoundException('user not found')
    }
    return users;
   }

   async update (id: string, updateUserDto){
   const updateUser=   await this. User.findByIdAndUpdate(id,updateUserDto,{new: true})

    if(!updateUser){
      throw new NotFoundException('user not found')
    }
    return updateUser;
   }

   async delete (id: string, deletedUserDto){
    const deleteUser=   await this. User.findByIdAndUpdate(id,deletedUserDto,{new: true})

    if(!deleteUser){
      throw new NotFoundException('user not found')
    }
    return deleteUser
  }
  // private users: CreateUser[] = [];

  // addUser(user: CreateUser) {
  //   this.users.push(user);
  // }

  // getUsers() {
  //   return this.users;
  // }
}
