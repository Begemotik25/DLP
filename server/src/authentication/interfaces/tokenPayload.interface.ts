import { Role } from 'src/users/role.enum';

interface TokenPayload {
  userId: string;
  role: Role;
}

export default TokenPayload;
