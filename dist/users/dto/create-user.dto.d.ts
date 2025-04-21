declare enum Permission {
    USER = "user",
    ADMIN = "admin"
}
declare class AddressDto {
    street: string;
    number: string;
    city: string;
    zipCode: string;
    complement?: string;
}
export declare class CreateUserDto {
    name: string;
    email: string;
    phone: string;
    password: string;
    permission: Permission;
    address: AddressDto;
}
export {};
