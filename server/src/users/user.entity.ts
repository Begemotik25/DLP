import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Role } from './role.enum';
import Institution from 'src/institutions/institution.entity';
import Invoice from 'src/invoices/invoice.entity';
import Course from 'src/courses/course.entity';
import Notification from 'src/notifications/notification.entity';
import Message from 'src/messages/message.entity';
import Group from 'src/groups/group.entity';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column({ unique: true })
  public email: string;

  @Column({
    type: 'enum',
    enum: Role,
  })
  public role: Role;

  @Column()
  public lastName: string;

  @Column()
  public firstName: string;

  @Column({ nullable: true })
  public password: string;

  @Column({ nullable: true })
  public tempPassword: string;

  @ManyToOne(() => Institution, (institution) => institution.users)
  public institution: Institution;

  @ManyToOne(() => Group, (group) => group.users)
  public group: Group;

  @Column({ nullable: true })
  public avatarLink: string;

  @OneToMany(() => Invoice, (invoice: Invoice) => invoice.user)
  public invoices: Invoice[];

  @OneToMany(() => Course, (course: Course) => course.teacher)
  public courses: Course[];

  @Column({ nullable: true })
  public studentId: string;

  @OneToMany(
    () => Notification,
    (notification: Notification) => notification.user,
  )
  public notifications: Notification[];

  @OneToMany(() => Message, (message: Message) => message.user)
  public messages: Message[];

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
