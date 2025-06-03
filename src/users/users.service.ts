import { Injectable } from '@nestjs/common';
import { CreateUser } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUser[] = [];

  addUser(user: CreateUser) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
