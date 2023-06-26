import { IsEmail, IsOptional, IsString } from 'class-validator';

import { Role } from '../role.enum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  tempPassword: string;

  @IsString()
  @IsOptional()
  userId: string;

  @IsString()
  @IsOptional()
  institutionId: string;

  role: Role;

  avatar: any;
}

export default CreateUserDto;
