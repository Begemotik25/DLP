import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Group from './group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateGroupDto from './dto/createGroup.dto';
import { InstitutionsService } from 'src/institutions/institutions.service';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
    private institutionService: InstitutionsService,
  ) {}

  async create(groupsData: CreateGroupDto) {
    const { institutionID } = groupsData;

    const id = institutionID;
    const institution = await this.institutionService.findById(id);

    if (!institution) {
      throw new HttpException(
        'Institution with this id doesn`t exists',
        HttpStatus.NOT_FOUND,
      );
    }
    delete groupsData.institutionID;

    const createdGroup = await this.groupsRepository.create({
      ...groupsData,
      institution: institution,
    });
    await this.groupsRepository.save(createdGroup);
    return createdGroup;
  }

  async getAll() {
    return await this.groupsRepository.find();
  }

  async findById(id) {
    const group = await this.groupsRepository.findOneBy({ id });
    return group;
  }
}
