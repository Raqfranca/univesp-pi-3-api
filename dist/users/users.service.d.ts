import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: CreateUserDto): Promise<User>;
    remove(id: string): Promise<any>;
    validateUser(loginUserDto: LoginUserDto): Promise<{
        message: string;
        userId: unknown;
        userPermission: "user" | "admin";
    }>;
}
