import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as fs from 'fs';
import { createReadStream } from 'fs';
import { PassThrough, Readable } from 'stream';
import { resolve, join } from 'path';

@Injectable()
export class GoogleDriveService {
  private readonly drive;

  constructor() {
    const keyFilePath = join(process.cwd(), 'client_secret.json');

    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    });

    this.drive = google.drive({ version: 'v3', auth });

    auth
      .getClient()
      .then((client) => {
        console.log('Authorization status: Authorized');
      })
      .catch((error) => {
        console.log('Authorization status: Not authorized');
        console.error(error);
      });
  }

  async uploadFile(filename: string, file: any): Promise<string> {
    const media = {
      mimeType: 'application/octet-stream',
      body: Readable.from(file),
    };

    const { data } = await this.drive.files.create({
      requestBody: {
        name: filename,
      },
      media,
    });
    console.log(45555, data);

    return data.id;
  }

  async deleteFile(fileId: number) {
    // const user = await this.getById(userId);
    // const fileId = user.avatar?.id;
    // if (fileId) {
    //   await this.usersRepository.update(userId, {
    //     ...user,
    //     avatar: null,
    //   });
    //   await this.filesService.deletePublicFile(fileId);
    // }
  }
}
