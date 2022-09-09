import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { User, userDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<userDocument>) {}
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getOneUser(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async createUser(userDto: createUserDto): Promise<User> {
    const newUser = await this.userModel.create(userDto);
    return newUser;
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, updateDto: updateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateDto);
  }
}
