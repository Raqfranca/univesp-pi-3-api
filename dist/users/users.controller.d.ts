import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./interfaces/user.interface").User>;
    findAll(): Promise<import("./interfaces/user.interface").User[]>;
    findOne(id: string): Promise<import("./interfaces/user.interface").User>;
    update(id: string, updateUserDto: CreateUserDto): Promise<import("./interfaces/user.interface").User>;
    remove(id: string): Promise<any>;
    login(loginUserDto: LoginUserDto): Promise<{
        message: string;
        userId: unknown;
        userPermission: "user" | "admin";
    }>;
}
