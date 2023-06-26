import { Role } from 'src/users/role.enum';

export class RegisterDto {
  email: string;
  firstName: string;
  lastName: string;
  tempPassword: string;
  role: Role;
}

export default RegisterDto;
