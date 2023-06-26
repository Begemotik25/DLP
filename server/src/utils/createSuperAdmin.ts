import { getRepositoryToken } from '@nestjs/typeorm';
import { GroupsService } from 'src/groups/groups.service';
import { InstitutionsService } from 'src/institutions/institutions.service';
import User from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

export const createSuperAdmin = async (app) => {
  let user = app.get(getRepositoryToken(User));
  const institutionsService = app.get(InstitutionsService);
  const groupsService = app.get(GroupsService);

  let userService = new UsersService(user, institutionsService, groupsService);
  userService.createSuperAdmin();
};
