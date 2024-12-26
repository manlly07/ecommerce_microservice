import { IsNotEmpty, IsString, IsEmail, IsEmpty, IsNumber, IsDefined } from "class-validator";

export class UserLoginRequest {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    user_email: string;

    @IsNotEmpty()
    @IsString()
    user_password: string;

    @IsEmpty()
    @IsString()
    user_agent: string;

    @IsEmpty()
    @IsString()
    user_login_ip: string;
}

export class UserRegisterRequest {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    user_email: string;
}

export class PaginationsRequest {
    @IsNumber()
    @IsEmpty()
    page: number;

    @IsNumber()
    @IsEmpty()
    perPage: number;
}