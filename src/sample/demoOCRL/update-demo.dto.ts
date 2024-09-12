import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateDemoDto {
    @IsOptional()
    @IsString()
    readonly name?: string;
  
    @IsOptional()
    @IsEmail()
    readonly email?: string;
  
    @IsOptional()
    @IsString()
    readonly password?: string;
  }