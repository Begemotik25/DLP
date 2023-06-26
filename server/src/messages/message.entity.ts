import ChatRoom from 'src/chat-rooms/chat-room.entity';
import Course from 'src/courses/course.entity';
import Institution from 'src/institutions/institution.entity';
import User from 'src/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Message {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column()
  public message: string;

  @ManyToOne(() => User, (user: User) => user.messages)
  public user: User;

  @ManyToOne(() => ChatRoom, (chatRoom: ChatRoom) => chatRoom.messages)
  public chatRoom: ChatRoom;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
