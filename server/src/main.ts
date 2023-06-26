import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createSuperAdmin } from './utils/createSuperAdmin';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(3002);
  await createSuperAdmin(app);
}
bootstrap();