import { ChangePasswordDto } from 'src/authentication/dto/changePassword.dto';
import { EmailService } from 'src/email/email.service';
import { Strategy } from 'passport-local';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';
import { Role } from './role.enum';
import Institution from 'src/institutions/institution.entity';
import { InstitutionsService } from 'src/institutions/institutions.service';
import * as bcrypt from 'bcrypt';
import { GroupsService } from 'src/groups/groups.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly institutionsService: InstitutionsService,
    private readonly groupsService: GroupsService,
  ) {}

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async getById(id) {
    const user = await this.usersRepository.findOneBy({ id });
    if (user) {
      delete user.password;
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async getByInstitutionId(id) {
    const user = await this.usersRepository.findOneBy({ id });
    if (user) {
      delete user.password;
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async create(userData: CreateUserDto) {
    const { email, institutionId } = userData;

    const user = await this.usersRepository.findOneBy({ email });
    if (user) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.NOT_FOUND,
      );
    }
    const institution = await this.institutionsService.findById(institutionId);
    const newUser = new User();
    newUser.email = userData.email;
    newUser.role = userData.role;
    newUser.lastName = userData.lastName;
    newUser.firstName = userData.firstName;
    newUser.tempPassword = userData.tempPassword;

    if (!institution) {
      throw new HttpException(
        'Institution with this id doesn`t exists',
        HttpStatus.NOT_FOUND,
      );
    }
    delete userData.institutionId;

    let userRawData = {
      ...userData,
      institution: institution,
    };
    let group = {};
    if (userRawData.groupID) {
      const groupEntity = await this.groupsService.findById(
        userRawData.groupID,
      );
      delete userRawData.groupID;
      group = groupEntity;
    }
    const createdUser = await this.usersRepository.create({
      ...userData,
      institution,
      group,
    });
    await this.usersRepository.save(createdUser);
    return newUser;
  }

  async createSuperAdmin() {
    const superAdmin = await this.usersRepository.findOneBy({
      role: Role.SuperAdmin,
    });
    if (!superAdmin) {
      const {
        SUPERADMIN_EMAIL,
        SUPERADMIN_FIRSTNAME,
        SUPERADMIN_LASTNAME,
        SUPERADMIN_PASSWORD,
      } = process.env;

      const saltOrRounds = 10;
      const password = SUPERADMIN_PASSWORD;
      const hashPassword = await bcrypt.hash(password, saltOrRounds);
      const superAdminData = {
        email: SUPERADMIN_EMAIL,
        firstName: SUPERADMIN_FIRSTNAME,
        lastName: SUPERADMIN_LASTNAME,
        role: Role.SuperAdmin,
        password: hashPassword,
      };

      const newSuperAdmin = await this.usersRepository.create(superAdminData);
      await this.usersRepository.save(newSuperAdmin);
      console.info('SuperAdmin created');
    }
  }

  async getAll() {
    return await this.usersRepository.find();
  }

  async getByRole(role) {
    const users = await this.usersRepository.find({
      where: { role: role },
      relations: ['group', 'institution'],
    });
    return users;
  }

  async changePassword(userId, newPassword) {
    let user = await this.usersRepository.findOneBy({ id: userId });
    if (!user) {
      throw new HttpException(
        'User with this id doesn`t exists',
        HttpStatus.NOT_FOUND,
      );
    }
    if (user.tempPassword) {
      user.tempPassword = null;
    }
    console.log(newPassword);

    const hashPassword = await bcrypt.hash(newPassword.toString(), 10);
    user.password = hashPassword;
    await this.usersRepository.update(userId, user);
    return user;
  }
}
