import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';
import { Status } from 'src/common/enums/status.enum';

export class InstitutionDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  status: Status;

  photo: any;

  photoId: string;
}

export default InstitutionDto;
