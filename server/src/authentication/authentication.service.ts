import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import RegisterDto from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import PostgresErrorCode from '../database/postgresErrorCode.enum';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import TokenPayload from './interfaces/tokenPayload.interface';
import LogInDto from './dto/logIn.dto';
import User from 'src/users/user.entity';
import { log } from 'console';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async login(userDto: LogInDto) {
    const user = await this.validateUser(userDto);
    const token = await this.generateToken(user);

    delete user.password;
    return { token, user };
  }

  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.usersService.getByEmail(email);

      if (user.tempPassword && user.tempPassword === plainTextPassword) {
        return user;
      }

      await this.verifyPassword(plainTextPassword, user.password);
      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    console.log(plainTextPassword);
    console.log(hashedPassword);

    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async generateToken(user: User) {
    const payload = { userId: user.id, role: user.role };
    return this.jwtService.sign(payload);
  }

  public async validateUser(userDto: LogInDto) {
    const user = await this.usersService.getByEmail(userDto.email);

    if (!user) {
      throw new UnauthorizedException({
        message: 'User does not exist',
      });
    }
    if (user.tempPassword && user.tempPassword === userDto.password) {
      return user;
    }
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Wrong email or password',
    });
  }
}
