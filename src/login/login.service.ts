import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Login, DataDocument } from '../schemas/login.schemas';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class LoginService {
  constructor(@InjectModel(Login.name) private dataModel: Model<DataDocument>) {}

  async register(dto: any): Promise<Login> {
    const hash = await bcrypt.hash(dto.password, 10);
    const user = new this.dataModel({ ...dto, password: hash });
    return user.save();
  }

  async login(dto: any) {
    const user = await this.dataModel.findOne({ email: dto.email });
    if (!user) throw new NotFoundException('User not found');

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new NotFoundException('Invalid credentials');

    return { message: 'Login successful', user };
  }

  async findAll(): Promise<Login[]> {
    return this.dataModel.find();
  }

  async findOne(id: string): Promise<Login| null> {
    return this.dataModel.findById(id);
  }

  async update(id: string, dto: any):  Promise<Login | null> {
    return this.dataModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.dataModel.findByIdAndDelete(id);
  }
}
