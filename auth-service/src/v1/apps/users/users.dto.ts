import { IsNotEmpty, IsString, IsEmail, IsEmpty } from "class-validator";

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