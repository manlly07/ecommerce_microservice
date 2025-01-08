import { IsEmail, IsString, IsOptional, MinLength } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  user_email: string;

  @IsOptional()  
  @IsString()
  @MinLength(6)
  user_password?: string;
}
