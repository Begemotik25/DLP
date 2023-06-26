import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationService } from './authentication/authentication.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { JwtModule } from '@nestjs/jwt';
import { InstitutionsModule } from './institutions/institutions.module';
import { TasksModule } from './tasks/tasks.module';
import { CoursesModule } from './courses/courses.module';
import { InvoicesModule } from './invoices/invoices.module';
import { GroupsModule } from './groups/groups.module';
import { UsersHasTasksModule } from './users-has-tasks/users-has-tasks.module';
import { UsersHasGroupsModule } from './users-has-groups/users-has-groups.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ChatRoomsModule } from './chat-rooms/chat-rooms.module';
import { MessagesModule } from './messages/messages.module';
import { GoogleDriveModule } from './google-drive/google-drive.module';
import { EmailModule } from './email/email.module';
import { NewsModule } from './news/news.module';
import { ChatRoomsGateway } from './chat-rooms/chat-rooms.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        GOOGLE_AUTH_CLIENT_ID: Joi.string().required(),
        GOOGLE_AUTH_CLIENT_SECRET: Joi.string().required(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        SERVER_PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    UsersModule,
    JwtModule,
    AuthenticationModule,
    InstitutionsModule,
    TasksModule,
    CoursesModule,
    InvoicesModule,
    GroupsModule,
    UsersHasTasksModule,
    UsersHasGroupsModule,
    NotificationsModule,
    ChatRoomsModule,
    MessagesModule,
    GoogleDriveModule,
    EmailModule,
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthenticationService, ChatRoomsGateway],
})
export class AppModule {}
