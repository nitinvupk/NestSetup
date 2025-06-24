import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Login, LoginDocument } from '../schemas/login.schemas';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class LoginService {
  constructor(@InjectModel(Login.name) private loginModel: Model<LoginDocument>) {}

  async register(dto: any): Promise<Login> {
    console.log('login',this.register)
    const hash = await bcrypt.hash(dto.password, 10);
    const user = new this.loginModel({ ...dto, password: hash });
    return user.save();
  }

  async login(dto: any) {
    console.log('login',this.login)

    const user = await this.loginModel.findOne({ email: dto.email });
    if (!user) throw new NotFoundException('User not found');

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new NotFoundException('Invalid credentials');

    return { message: 'Login successful', user };
  }

  async findAll(): Promise<Login[]> {
    return this.loginModel.find();
  }

  async findOne(id: string): Promise<Login| null> {
    return this.loginModel.findById(id);
  }

  async update(id: string, dto: any):  Promise<Login | null> {
    return this.loginModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.loginModel.findByIdAndDelete(id);
  }
}
