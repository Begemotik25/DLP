import { Module } from '@nestjs/common';
import { InstitutionsController } from './institutions.controller';
import { InstitutionsService } from './institutions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Institution from './institution.entity';
import { GoogleDriveModule } from 'src/google-drive/google-drive.module';

@Module({
  imports: [TypeOrmModule.forFeature([Institution]), GoogleDriveModule],
  controllers: [InstitutionsController],
  providers: [InstitutionsService],
  exports: [InstitutionsService],
})
export class InstitutionsModule {}
