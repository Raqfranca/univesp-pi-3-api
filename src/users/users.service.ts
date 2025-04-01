import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  // Método para buscar todos os usuários
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Método para buscar um usuário pelo ID
  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
  
  // Método para atualizar o usuário
  async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
    
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  // Método para deletar o usuário
  async remove(id: string): Promise<any> {
    
    const user = await this.userModel.findByIdAndDelete(id).exec();
    
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

}
