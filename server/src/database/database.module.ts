import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import User from 'src/users/user.entity';
import Institution from 'src/institutions/institution.entity';
import Group from 'src/groups/group.entity';
import Invoice from 'src/invoices/invoice.entity';
import Course from 'src/courses/course.entity';
import Task from 'src/tasks/task.entity';
import UserHasTask from 'src/users-has-tasks/user-has-task.entity';
import UserHasGroup from 'src/users-has-groups/user-has-group.entity';
import Notification from 'src/notifications/notification.entity';
import Message from 'src/messages/message.entity';
import ChatRoom from 'src/chat-rooms/chat-room.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [
          User,
          Institution,
          Group,
          Invoice,
          Course,
          Task,
          UserHasTask,
          UserHasGroup,
          Notification,
          Message,
          ChatRoom,
        ],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
