import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Institution from 'src/institutions/institution.entity';
import Group from 'src/groups/group.entity';
import Invoice from 'src/invoices/invoice.entity';
import Course from 'src/courses/course.entity';
import User from 'src/users/user.entity';

@Entity()
export default class UserHasGroup {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @OneToOne(() => Group)
  @JoinColumn()
  public group: Group;

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
