import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import RoleGuard from 'src/authentication/guards/role.guard';
import { Role } from './role.enum';
import CreateUserDto from './dto/createUser.dto';
import { EmailService } from 'src/email/email.service';
import ChangePasswordDto from 'src/authentication/dto/changePassword.dto';
import RequestWithUser from 'src/authentication/interfaces/requestWithUser.interface';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly emailService: EmailService,
  ) {}

  @Post()
  async create(@Body() userData: CreateUserDto) {
    let createdUser = await this.usersService.create(userData);
    if (createdUser) {
      await this.emailService.sendEmail(
        createdUser.email,
        'Temp password',
        `Your temp password is ${createdUser.tempPassword}`,
      );
    }
    return createdUser;
  }

  @Post('change-password/:userId')
  async changePassword(
    @Param('userId') userId: string,
    @Body() userData: ChangePasswordDto,
  ) {
    let response = await this.usersService.changePassword(
      userId,
      userData.password,
    );

    return response;
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    let user = await this.usersService.getById(id);

    delete user.password;
    if (user.tempPassword) {
      user.tempPassword = 'true';
    }
    return user;
  }

  @Get()
  async getAll() {
    return await this.usersService.getAll();
  }

  @Get('role/:role')
  async getByRole(@Param('role') role: Role) {
    return await this.usersService.getByRole(role);
  }
}
