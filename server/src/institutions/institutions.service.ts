import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import InstitutionDto from './dto/institution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Institution from './institution.entity';

@Injectable()
export class InstitutionsService {
  constructor(
    @InjectRepository(Institution)
    private institutionsRepository: Repository<Institution>,
  ) {}

  async create(institutionData: InstitutionDto) {
    const { email } = institutionData;

    const institution = await this.institutionsRepository.findOneBy({ email });

    if (institution) {
      throw new HttpException(
        'Institution with this email already exists',
        HttpStatus.NOT_FOUND,
      );
    }
    const newInstitution = await this.institutionsRepository.create(
      institutionData,
    );
    await this.institutionsRepository.save(newInstitution);
    return newInstitution;
  }

  async getAll() {
    return await this.institutionsRepository.find();
  }

  async findById(id) {
    const institution = await this.institutionsRepository.findOneBy({ id });
    return institution;
  }
}
