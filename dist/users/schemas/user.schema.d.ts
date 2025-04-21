import { Document } from 'mongoose';
export type UserDocument = User & Document;
declare enum Permission {
    USER = "user",
    ADMIN = "admin"
}
declare class Address {
    street: string;
    number: string;
    city: string;
    zipCode: string;
    complement?: string;
}
export declare class User {
    name: string;
    email: string;
    phone: string;
    password: string;
    permission: Permission;
    address: Address;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export {};
