import { IsString, IsNotEmpty, IsNumber, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCartItemDTO {
  @IsNotEmpty()
  @IsString()
  product_id: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;
}

export class UpdateCartDTO {
  @IsOptional()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  cart_id: string;

  @IsNotEmpty()
  @IsNumber()
  action_type: number;

  @IsNotEmpty() 
  @IsString()
  product_id: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;
}
