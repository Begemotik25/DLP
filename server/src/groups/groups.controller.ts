import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateGroupDto from './dto/createGroup.dto';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  async create(@Body() groupData: CreateGroupDto) {
    let createdGroup = await this.groupsService.create(groupData);

    return createdGroup;
  }

  @Get()
  async getAll() {
    return await this.groupsService.getAll();
  }
}
