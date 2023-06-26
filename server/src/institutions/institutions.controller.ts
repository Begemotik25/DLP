import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { InstitutionsService } from './institutions.service';
import InstitutionDto from './dto/institution.dto';
import RoleGuard from 'src/authentication/guards/role.guard';
import { Role } from 'src/users/role.enum';
import { GoogleDriveService } from 'src/google-drive/google-drive.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('institutions')
export class InstitutionsController {
  constructor(
    private readonly institutionsService: InstitutionsService,
    private readonly googleDriveService: GoogleDriveService,
  ) {}

  @Post()
  @UseGuards(RoleGuard(Role.SuperAdmin))
  @UseInterceptors(FileInterceptor('photo'))
  async create(@UploadedFile() photo, @Body() institutionData: InstitutionDto) {
    if (photo) {
      const photoId = await this.googleDriveService.uploadFile(
        photo.originalname,
        photo,
      );
      institutionData.photoId = photoId;
      console.log('id', photoId);
    }
    return await this.institutionsService.create(institutionData);
  }

  @Get()
  @UseGuards(RoleGuard(Role.SuperAdmin))
  async getAll() {
    return await this.institutionsService.getAll();
  }
}
