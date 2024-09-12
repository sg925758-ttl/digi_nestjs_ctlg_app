import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateDemoDto{
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}